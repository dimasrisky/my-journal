import dotenv from 'dotenv'
import path from 'path'
import fs from 'node:fs'
import { Router } from "express"
import { Post } from '../Model/Models.mjs'
import { DummyData } from "../dummy_data/DummyData.mjs"
import { getDirnamePostImage } from "../public/assets/post-img/GetDirname.mjs"
import { VerifyImage, VerifyToken } from "../middleware/Middlewares.mjs"
import { getImageFormat, getCurrentImagePost } from '../functions/Functions.mjs'
dotenv.config()

export const PostRouter = Router()

PostRouter.get('/generate-posts', async (request, response) => {
    const dummy = new DummyData()
    await dummy.generateDummyPosts(40)
    response.send('berhasil')
})

PostRouter.get('/posts/:category', VerifyToken, async (request, response) => {
    const { category } = request.params
    const { page } = request.query
    const postsPerPage = 5 // mengatur berapa banyak 'post' yang akan di query per 'page'
    const totalPage = await Post.countDocuments({ category }) / postsPerPage
    const next_page = parseInt(page) + 1 // mendefinisikan page selanjutnya. ex: jika saat ini 'page' 1 maka page selanjutnya adalah 2
    const previous_page = parseInt(page) - 1 // mendefinisikan page sebelumnya. ex: jika saat ini 'page' 3 maka page sebelumnya adalah 2
    try{
        const posts = await Post.find({ category }).skip(page * postsPerPage).limit(5)
        response.status(200).json({
            status: 'success',
            posts,
            dir_image: `${process.env.SERVER_URL}/assets/post-img`, // directory dimana image dari postingan berada ( karena di database hanya tersimpan nama gambarnya saja )
            next_page: parseInt(page) >= Math.ceil(totalPage) - 1 ? null : `${process.env.API_URL}/posts/${category}?page=${next_page}`, // url untuk ke 'page' selanjutnya
            previous_page: parseInt(page) <= 0  ? null : `${process.env.API_URL}/posts${category}?page=${previous_page}`, // url untuk ke 'page' sebelumnya
            total_page: Math.ceil(totalPage)
        })
    }catch(error){
        response.json({ status: 'failed', message: error })
    }
})

PostRouter.get('/user-posts', VerifyToken, async (request, response) => {
    const { id } = response.locals.payload
    try{
        const posts = await Post.find({ 'author._id': id })
        response.json({
            status: 'success',
            posts,
            dir_image: `${process.env.SERVER_URL}/assets/post-img`,
            total_likes: posts.reduce((prev, curr) => prev + curr.like, 0)
        })
    }catch(error){
        response.json({ status: 'failed', message: error})
    }
})

PostRouter.get('/post', VerifyToken, async (request, response) => {
    const { id } = request.query
    try{
        const post = await Post.findById(id)
        response.json({ status: 'success', post, dir_image: `${process.env.SERVER_URL}/assets/post-img` })
    }catch(error){
        response.json({ status: 'failed', message: 'post not found'})
    }
})

// route untuk mendapatkan data postingan atau posts
PostRouter.get('/posts', VerifyToken, async (request, response) => {
    const { page } = request.query // mengambil string query 'page' yang akan digunakan untuk kebutuhan paginating
    const postsPerPage = 5 // mengatur berapa banyak 'post' yang akan di query per 'page'
    if(page){ // jika ada query string bernama 'page' maka response yang dikirimkan akan memakai paginating ex: http://localhost:3002/api/posts?page=1
        let next_page = parseInt(page) + 1 // mendefinisikan page selanjutnya. ex: jika saat ini 'page' 1 maka page selanjutnya adalah 2
        let previous_page = parseInt(page) - 1 // mendefinisikan page sebelumnya. ex: jika saat ini 'page' 3 maka page sebelumnya adalah 2
        let posts = await Post.find().skip(page * postsPerPage).limit(5)
        let totalPage = await Post.countDocuments() / postsPerPage
        response.status(200).json({
            status: 'success',
            posts, // postingan
            dir_image: `${process.env.SERVER_URL}/assets/post-img`, // directory dimana image dari postingan berada ( karena di database hanya tersimpan nama gambarnya saja )
            next_page: parseInt(page) >= Math.ceil(totalPage) - 1 ? null : `${process.env.API_URL}/posts?page=${next_page}`, // url untuk ke 'page' selanjutnya
            previous_page: parseInt(page) <= 0  ? null : `${process.env.API_URL}/posts?page=${previous_page}`, // url untuk ke 'page' sebelumnya
            total_page: Math.ceil(totalPage)
        })
    }else{ // jika client tidak menyertakan query string 'page' maka akan mengambil semua document 'posts' dari database
        const posts = await Post.find() // mengambil semua document postingan yang ada di database
        response.status(200).json({
            status: 'success',
            posts, // postingan
            dir_image: `${process.env.SERVER_URL}/assets/post-img`, // directory dimana image dari postingan berada ( karena di database hanya tersimpan nama gambarnya saja )
        })
    }
})

// route untuk query 'post' paling populer ( like terbanyak )
PostRouter.get('/popular-posts', VerifyToken, async (request, response) => {
    try{
        const posts = await Post.find().sort({ like: -1 }).limit(8)
        response.status(200).json({
            status: 'success',
            posts, // postingan
            dir_image: `${process.env.SERVER_URL}/assets/post-img`, // directory dimana image dari postingan berada ( karena di database hanya tersimpan nama gambarnya saja )
        })
    }catch(err){
        response.status(500).json({ status: 'failed', message: err })
    }
})

// route untuk memuat artikel paling baru
PostRouter.get('/newest-posts', async (request, response) => {
    try{
        const posts = await Post.find().sort({ uid: -1 }).limit(5)
        response.status(200).json({
            status: 'success',
            posts, // postingan
            dir_image: `${process.env.SERVER_URL}/assets/post-img`, // directory dimana image dari postingan berada ( karena di database hanya tersimpan nama gambarnya saja )
        })
    }catch(err){
        response.status(500).json({ status: 'failed', message: err })
    }
})


// route untuk membuat 'post'
PostRouter.post('/post', VerifyToken, VerifyImage, async (request, response) => {
    const { uid, author_id, author_username, title, content, category } = request.body
    const postImage = request.files.image
    console.log(content)
    postImage.mv(path.join(getDirnamePostImage(), `${postImage.md5}.${getImageFormat(postImage)}`))
    try{
        await Post.create({ uid, author: { _id: author_id, username: author_username}, title, content, category, image: `${postImage.md5}.${getImageFormat(postImage)}` })
        response.status(200).json({
            status: 'success',
            post: { uid, author: { _id: author_id, username: author_username}, title, content, category, image: postImage.name }
        })
    }catch(error){
        response.status(500).json({ status: 'failed', message: error })
    }
})

PostRouter.put('/inc-like', VerifyToken, async (request, response) => {
    const { post_id, user_id } = request.query
    if( !post_id || !user_id ) response.json({ status: 'failed' })
    await Post.findByIdAndUpdate(post_id, { $inc: { like: 1 } })
    await Post.findByIdAndUpdate(post_id, { $push: { liked_by: user_id } })
    response.json({ status: 'success' })
})

PostRouter.delete('/post', VerifyToken, async ( request, response ) => {
    const { id } = request.query
    if(!id) response.status(400).json({ status: 'failed' })
    const currentImagePost = await getCurrentImagePost(id)
    fs.unlink(`${import.meta.dirname}/public/assets/post-img/${currentImagePost}`, (error) => {
        if(error) console.log(error)
        console.log('successfully deleted image!!')
    })
    try{
        await Post.findByIdAndDelete(id)
        response.status(200).json({ status: 'success', message: 'Post has been deleted!'})
    }catch(err){
        response.status(400).json({ status: 'failed', message: err})
    }
})
