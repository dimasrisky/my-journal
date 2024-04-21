import React, { useState } from 'react'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { useCategory } from '../hooks/useCategory'
import { useCreatePost } from '../hooks/useCreatePost'
import { PopUp } from './PopUp'


export function CreateArticle(){
    const user = useCurrentUser()
    const categories = useCategory()
    const [ showPopUp, setShowPopUp ] = useState(false)
    const [ title, setTitle ] = useState()
    const [ content, setContent ] = useState()
    const [ category, setCategory ] = useState()
    const [ image, setImage ] = useState()
    
    function submitted(event){
        event.preventDefault()
        const post = {
            author: { 
                _id: user._id,
                username: user.username
            },
                title, content, category, image
            }
        useCreatePost(post)
    }

  return (
    <>
        <div className="w-[80%] p-6 mx-auto mt-[20px]">
            <h1 className='font-poetsen text-[40px] mb-[20px]'>Create New Post.</h1>
            <form className='flex flex-col gap-3' onSubmit={submitted}>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="author" className='text-[13px] font-semibold'>Author :</label>
                    <input type="text" className='p-2 text-base border border-[#A3A3A3] rounded-md outline-none' id='author'  value={user ? user.username : "loading..."} readOnly />
                </div>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="title" className='text-[13px] font-semibold'>Title :</label>
                    <input type="text" id='title' className='p-2 text-base border border-[#A3A3A3] rounded-md outline-none' onChange={e => setTitle(e.target.value)} value={title} placeholder='Type here...' required/>
                </div>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="content" className='text-[13px] font-semibold'>Content :</label>
                    <textarea id="content" cols="30" rows="10"  className='p-2 text-base border border-[#A3A3A3] rounded-md outline-none' onChange={e => setContent(e.target.value)} value={content} required></textarea>
                </div>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="category" className='text-[13px] font-semibold'>Category :</label>
                    <select name="category" id="category" className='px-2 py-2 w-[40%] text-base border border-[#A3A3A3] rounded-md outline-none' onChange={e => setCategory(e.target.value)} value={category}>
                        <option value="select-category">Select Category</option>
                        {categories?.map((category, index) => <option key={index} value={category.id}>{category.category}</option>)}
                    </select>
                </div>
                <div className='flex flex-col gap-2 font-inter'>
                    <label htmlFor="image" className='text-[13px] font-semibold'>Image :</label>
                    <input type="file" id='image' className='px-2 py-2 w-[40%] text-base border border-[#A3A3A3] rounded-md outline-none'  onChange={e => setImage(e.target.files[0])} />
                </div>
                <button type='submit' className='w-full mt-[20px] rounded-lg hover:bg-blue-400 transition-all duration-300  px-6 py-4 bg-[#4659FF] text-[16px] text-white font-inter font-semibold'>Submit Post</button>
            </form>
        </div>

        { showPopUp && <PopUp setShowPopUp={setShowPopUp} /> }

    </>
  )
}