import React from 'react'
import { Link } from 'react-router-dom'
import heartBlack from '../assets/icons/heart-black.svg'

export const TopArticle = ({ id, image, dirImage, category, title, author, like }) => {
  return (
     <div className="w-[504px] flex justify-center gap-[20px]">
        <img src={`${dirImage}/${image}`} className="w-[140px] rounded-md" />
        <div className="flex flex-col justify-between">
            <div>
                <h4 className="font-semibold text-primaryBlue text-xs font-inter">{category}</h4>
                <Link to={`articles/detail/${id}`} className="font-inter font-bold text-base hover:text-blue-500">{title}</Link>
                <div className='flex gap-1 items-center'>
                  <img src={heartBlack} className='fill-black w-4' alt="like" />
                  <p className='text-[12px]'>{like}</p>
                </div>
            </div>
            <p className="text-xs opacity-60 font-medium">Created By {author}</p>
        </div>
    </div>
  )
}