import React from 'react'
import { useFavoritesPosts } from '../hooks/useFavoritesPosts'
import { FavoritePost } from './Components'

export function UserFavoritePosts() {
  const { posts, dirImage } = useFavoritesPosts()
  return (
    <>
    <div className='w-[80%] p-8'>
        <h1 className='font-bold text-3xl mb-[60px]'>Your Favorite Posts</h1>
        <div className='flex flex-col gap-4'>
        { posts?.map((post, index) => <FavoritePost key={index} id={post._id} title={post.title} category={post.category} image={post.image} dirImage={dirImage} like={post.like} /> )}
        </div>
    </div>
    </>
  )
}
