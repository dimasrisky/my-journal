import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Post } from '../apiMethod/Post'
import { GetCurrentUser } from '../apiMethod/GetCurrentUser'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Get } from '../apiMethod/Get'

export const CreateArticle = () => {
    const navigate = useNavigate()
    const [ isSubmitClicked, setIsSubmitClicked ] = useState(0)
    const [ currentUser, setCurrentUser ] = useState()
    const [ listCategories, setListCategories ] = useState()
    const [ title, setTitle ] = useState()
    const [ content, setContent ] = useState()
    const [ category, setCategory ] = useState()
    const [ image, setImage ] = useState()

    const getAllCategories = async () => {
        const getCategories = await Get('http://127.0.0.1:8000/api/categories', Cookies.get('token'))
        if(getCategories.status == 'success'){
            setListCategories(getCategories.data)
        }
    }

    const getUser = async () => {
        const user = await GetCurrentUser(Cookies.get('token'))
        if(user.status == 'success'){
            setCurrentUser(user.data)
        }
    }

    useEffect(() => {
        getUser()
        getAllCategories()
    }, [])

    // Submit Event
    const submitArticle =  async ( event ) => {
        event.preventDefault()
        if(isSubmitClicked === 0){            
            setIsSubmitClicked(prev => prev + 1)
            let body = new FormData()
            body.append("user_id", currentUser?.id)
            body.append("title", title)
            body.append("content", content)
            body.append("category", category)
            body.append("image", image)
            const postArticle = await Post('http://127.0.0.1:8000/api/articles', body, Cookies.get('token'))
            if(postArticle.status == 'success'){
                navigate('/articles')
            }else{
                navigate('/articles/create')
            }
        }
    }

  return (
    <>
        <Navbar theme={'light'} />
        <div className="w-[90vw] mx-auto mt-[70px]">
            <h1 className='font-poetsen text-[40px] mb-[20px]'>Create New Post.</h1>
            <form className='flex flex-col gap-3' onSubmit={submitArticle}>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="author" className='text-[13px] font-semibold'>Author :</label>
                    <input type="text" className='p-2 text-base border border-[#A3A3A3] rounded-md outline-none' id='author'  value={currentUser ? currentUser.username : "loading..."} readOnly />
                </div>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="title" className='text-[13px] font-semibold'>Title :</label>
                    <input type="text" id='title' className='p-2 text-base border border-[#A3A3A3] rounded-md outline-none' onChange={e => setTitle(e.target.value)} placeholder='Type here...'/>
                </div>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="content" className='text-[13px] font-semibold'>Content :</label>
                    <textarea id="content" cols="30" rows="10"  className='p-2 text-base border border-[#A3A3A3] rounded-md outline-none' onChange={e => setContent(e.target.value)}  value={content}></textarea>
                </div>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="category" className='text-[13px] font-semibold'>Category :</label>
                    <select name="category" id="category" className='px-2 py-2 w-[40%] text-base border border-[#A3A3A3] rounded-md outline-none' onChange={e => setCategory(e.target.value)}>
                        {listCategories?.map(eachCategory => <option value={eachCategory.id}>{eachCategory.nama}</option>)}
                    </select>
                </div>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="image" className='text-[13px] font-semibold'>Image :</label>
                    <input type="file" id='image' className='px-2 py-2 w-[40%] text-base border border-[#A3A3A3] rounded-md outline-none'  onChange={e => setImage(e.target.files[0])} />
                </div>
                <button type='submit' className='w-[8rem] rounded-lg hover:bg-blue-400 transition-all duration-300  px-6 py-2 bg-[#4659FF] text-[12px] text-white font-inter font-semibold'>Submit</button>
            </form>
        </div>
        <Footer />
    </>
  )
}