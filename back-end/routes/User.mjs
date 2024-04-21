import { Router } from 'express'
import { VerifyToken } from '../middleware/Middlewares.mjs'
import { User, Post } from '../Model/Models.mjs'
import { DummyData } from '../dummy_data/DummyData.mjs'
import mongoose from 'mongoose'

export const UserRouter = Router()

UserRouter.get('/generate-users', async (request, response) => {
    const dummy = new DummyData()
    await dummy.generateDummyUser(20)
    response.send('berhasil')
})

UserRouter.get('/user', VerifyToken, async (request, response) => {
    const { id } = response.locals.payload
    try{
        const user = await User.findById(id)
        response.json({ status: 'success', user })
    }catch(error){
        response.json({ status: 'failed', message: error})
    }
})

UserRouter.get('/posts-favorites', VerifyToken, async (request, response) => {
    const { id } = response.locals.payload
    try{
        const user = await User.findById(id)
        const posts = await Post.find({ _id: { $in: user.favorites_posts }})
        response.json({ status: 'success', posts, dir_image: `${process.env.SERVER_URL}/assets/post-img` })
    }catch(error){
        response.json({ status: 'failed', message: error })
    }
})

UserRouter.put('/add-favorite', VerifyToken, async (request, response) => {
    const { id } = response.locals.payload
    const { post_id } = request.body
    try{
        const result = await User.updateOne({ _id: id }, { $push: { favorites_posts: post_id }})
        console.log(post_id)
        console.log(result)
        response.json({ status: 'success' })
    }catch(error){
        console.log(error)
        response.json({ status: 'failed', message: error })
    }
})

UserRouter.put('/remove-favorite', VerifyToken, async (request, response) => {
    const { id } = response.locals.payload
    const { post_id } = request.body
    try{
        const result = await User.updateOne({ _id: id }, { $pull: { favorites_posts: post_id }})
        console.log(result)
        response.json({ status: 'success' })
    }catch(error){
        console.log(error)
        response.json({ status: 'failed', message: error })
    }
})

UserRouter.get('/users', VerifyToken, async (request, response) => {
    const { id } = response.locals
    try{
        const users = id ? await User.find({ _id: id }) : await User.find()
        response.status(200).json({ users })
    }catch(err){
        console.log(err)
    }
})