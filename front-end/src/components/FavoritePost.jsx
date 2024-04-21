import Cookies from 'js-cookie'
import React from 'react'
import { Link } from 'react-router-dom'
import { createHeadersStructure, createBodyStructure } from '../functions/Functions'
import heartBlack from '../assets/icons/heart-black.svg'

export function FavoritePost({ id, title, category, image, dirImage, like }) {
  async function deleteFavoritePost(id){
    const token = Cookies.get('token')
    const headers = createHeadersStructure([{ key: "Authorization", value: `Bearer ${token}` }, { key: "Accept", value: "application/json"}])
    const body = createBodyStructure([{key: "post_id", value: id}])
    const response = await fetch(`${import.meta.env.VITE_API_URL}/remove-favorite`, { method: "PUT", headers, body })
    const result = await response.json()
    if(result.status == 'failed') alert('Post gagal dihapus')
    if(result.status == 'success'){
      alert('Post berhasil dihapus')
      window.location.reload()
      console.log(id)
    }
  }

  return (
    <div className='w-full h-[100px] flex gap-4'>
        <div className={`w-[150px] rounded-[6px] bg-[url('${dirImage}/${image}')] bg-cover bg-center`}></div>
        <div className='w-full flex justify-between'>
            <div>
                <h4 className='text-sm text-[#9199a1]'>{ category }</h4>
                <Link to={`/articles/detail/${ id }`} className='text-base font-semibold'>{ title }</Link>
                <div className='flex gap-1 items-center'>
                  <img src={heartBlack} className='fill-black w-4' alt="like" />
                  <p className='text-[12px]'>{like}</p>
                </div>
            </div>
            <button onClick={() => deleteFavoritePost(id)} className='w-[70px] h-[51px] my-auto bg-[#D71313] rounded-[9px]'>
                <img src="../src/assets/icons/delete.svg" className='w-6 mx-auto' alt="delete" />
            </button>
        </div>
    </div>
  )
}