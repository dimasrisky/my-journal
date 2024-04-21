import React from 'react'
import { Link } from 'react-router-dom'
import { useDeletePost } from '../hooks/useDeletePost'
import heartBlack from '../assets/icons/heart-black.svg'


export function UserArticle({ id, title, category, image, dirImage, like }) {
  return (
    <div className='w-full h-[100px] flex gap-4'>
        <div className={`w-[150px] rounded-[6px] bg-[url('${dirImage}/${image}')] bg-cover bg-center`}></div>
        <div className='w-full flex justify-between'>
            <div>
                <h4 className='text-sm text-[#9199a1]'>{ category }</h4>
                <Link to={`/articles/detail/${ id }`} className='text-base font-semibold'>{ title }</Link>
                <div className='flex gap-1 items-center mt-2'>
                  <img src={heartBlack} className='fill-black w-4' alt="like" />
                  <p className='text-[12px]'>{ like }</p>
                </div>
            </div>
            <button onClick={() => useDeletePost(id)} className='w-[70px] h-[51px] my-auto bg-[#D71313] rounded-[9px]'>
                <img src="../src/assets/icons/delete.svg" className='w-6 mx-auto' alt="delete" />
            </button>
        </div>
    </div>
  )
}