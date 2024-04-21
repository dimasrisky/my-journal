import React from 'react'
import { UserArticle } from './Components'
import { useUserPosts } from '../hooks/useUserPosts'
import { useCurrentUser } from '../hooks/useCurrentUser'

export function MyPosts() {
  const { posts, dirImage, totalLikes } = useUserPosts()
  const user = useCurrentUser()

  return (
    <div className='p-6 w-[80%]'>
        <h1 className='font-bold text-2xl mb-4'>Wellcome { user?.username }</h1>
        <div className='flex items-center flex-wrap gap-6'>
            <div className='w-[300px] bg-[#544F4F] text-center flex flex-col items-center justify-center rounded-[11px] h-[160px] relative'>
                <h3 className='uppercase text-white font-bold text-base absolute top-3'>current posts</h3>
                <h1 className='font-bold text-white text-5xl'>{posts?.length}</h1>
            </div>
            <div className='w-[300px] bg-[#544F4F] text-center flex flex-col items-center justify-center rounded-[11px] h-[160px] relative'>
                <h3 className='uppercase text-white font-bold text-base absolute top-3'>likes</h3>
                <h1 className='font-bold text-white text-5xl'>{ totalLikes }</h1>
            </div>
            <div className='w-[300px] bg-[#544F4F] text-center flex flex-col items-center justify-center rounded-[11px] h-[160px] relative'>
                <h3 className='uppercase text-white font-bold text-base absolute top-3'>favorites</h3>
                <h1 className='font-bold text-white text-5xl'>{ user?.favorites_posts.length }</h1>
            </div>
        </div>
        <div className='w-full flex items-center justify-between my-14  '>
            <h1 className='font-bold text-2xl '>Manage Posts</h1>
            <div className='flex'>
                <input type="text" placeholder='Search...' className='text-xs outline-none border w-[14rem] px-3 border-[#E5E1DA]'/>
                <button type='button' className='bg-[#727171]'>
                    <img src="../src/assets/icons/search.svg" className='w-9 p-2' alt="search" />
                </button>
            </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
            {posts?.map((post, index) => <UserArticle key={index} id={post._id} title={post.title} category={post.category} image={post.image} dirImage={dirImage} like={post.like} />)}
        </div>
    </div>
  )
}
