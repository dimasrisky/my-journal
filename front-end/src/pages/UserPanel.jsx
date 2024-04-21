import React, { useState } from 'react'
import { MyPosts, CreateArticle, UserFavoritePosts } from '../components/Components'
import { Link, useNavigate } from 'react-router-dom'
import { useCurrentUser } from '../hooks/useCurrentUser'
import Cookies from 'js-cookie'

export function UserPanel() {
    const navigate = useNavigate()
    const [ clickedState, setClickedState] = useState('my-posts')
    const user = useCurrentUser()
    if(clickedState == 'logout'){
        Cookies.remove('token')
        navigate('/login')
    }

    return (
        <>
        {/* Sidebar */}
        <div className='min-w-screen min-h-screen flex overflow-y-scroll'>
            <div className='w-[20%] min-h-screen bg-[#2F2A2A] flex flex-col items-center'>
                <div className='flex items-center gap-5 mr-[3rem] mt-[2rem]'>
                    <div className={`w-14 h-14 rounded-full bg-[url('../src/assets/icons/profile-photo.svg')] bg-cover bg-center bg-white`}></div>
                    <h1 className='text-white font-bold text-xl'>{user?.username.split(' ')[0]}</h1>
                </div>
                <div className='mt-[4rem] w-full flex flex-col items-start gap-3'>
                    <Link to={'/articles'} className='flex items-center mx-auto gap-2 w-full rounded-md py-2 px-4 hover:bg-slate-300 hover:bg-opacity-20 transition-all duration-300'>
                        <img src="../src/assets/icons/home.svg" alt="home" className='w-8' />
                        <h1 className='text-white font-semibold text-base'>Home</h1>
                    </Link>
                    <button onClick={() => setClickedState('my-posts')} className='flex items-center mx-auto gap-4 w-full rounded-md py-2 px-4 hover:bg-slate-300 hover:bg-opacity-20 transition-all duration-300'>
                        <img src="../src/assets/icons/plane.svg" alt="my-post" />
                        <h1 className='text-white font-semibold text-base'>My Posts</h1>
                    </button>
                    <button onClick={() => setClickedState('create-post')} className='flex items-center mx-auto gap-4 w-full rounded-md py-2 px-4 hover:bg-slate-300 hover:bg-opacity-20 transition-all duration-300'>
                        <img src="../src/assets/icons/add.svg" className='w-6' alt="my-post" />
                        <h1 className='text-white font-semibold text-base'>Create Post</h1>
                    </button>
                    <button onClick={() => setClickedState('favorites')} className='flex items-center mx-auto gap-4 w-full rounded-md py-2 px-4 hover:bg-slate-300 hover:bg-opacity-20 transition-all duration-300'>
                        <img src="../src/assets/icons/bookmark.svg" className='w-6' alt="my-post" />
                        <h1 className='text-white font-semibold text-base'>Favorites</h1>
                    </button>
                    <button onClick={() => setClickedState('logout')} className='flex items-center mx-auto gap-4 w-full rounded-md py-2 px-3 hover:bg-slate-300 hover:bg-opacity-20 transition-all duration-300'>
                        <img src="../src/assets/icons/logout.svg" className='w-7' alt="my-post" />
                        <h1 className='text-white font-semibold text-base'>Logout</h1>
                    </button>
                </div>
            </div>

            { clickedState === 'my-posts' && <MyPosts/>}
            { clickedState === 'create-post' && <CreateArticle />}
            { clickedState === 'favorites' && <UserFavoritePosts />}
        </div>
        </>
    )
}
