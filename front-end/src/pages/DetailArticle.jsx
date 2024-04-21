import React from 'react'
import { Navbar, Footer, Menu } from '../components/Components'
import { useParams } from 'react-router-dom'
import { usePost } from '../hooks/Hooks'

export const DetailArticle = () => {
  const { id } = useParams()
  const { post, dirImage } = usePost(`${import.meta.env.VITE_API_URL}/post?id=${id}`)

  return (
    <>
      <Navbar theme={'light'} />
      <div className='w-[90vw] mx-auto flex flex-col gap-4 items-start mt-[70px]'>
        <div className='w-full flex flex-col gap-2'>
          <div className={`h-[700px] bg-[url('${dirImage}/${post?.image}')] bg-cover bg-center bg-no-repeat`}></div>
          <h4 className='text-[18px] text-primaryBlue font-semibold'>{ post?.category }</h4>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-[25px]'>{ post?.title }</h1>
          <p className='text-[16px]'>{ post?.content }</p>
        </div>
      </div>

      <Menu post_id={id} post={post} />
      <Footer />
    </>
  )
}
