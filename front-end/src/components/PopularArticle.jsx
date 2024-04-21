import React from 'react'
import { Link } from 'react-router-dom'
import heartBlack from '../assets/icons/heart-black.svg'

export const PopularArticle = ({ id, dirImage, image, category, title, author, like}) => {
  return (
     <div className="min-w-[350px] min-h-[320px] flex flex-col justify-between border pb-[7px] snap-center">
        <div className="flex flex-col justify-between gap-2">
            <div className={`w-full h-[200px] bg-[url('${dirImage}/${image}')] bg-cover bg-center bg-no-repeat`}></div>
            <div className="flex flex-col px-[5px]">
                <Link to={''} className="font-inter font-semibold text-[#1EB0B9] hover:text-blue-700 text-[10px]">{ category }</Link>
                <Link to={`detail/${id}`} className="font-inter font-bold text-[12px] hover:text-[#1EB0B9]">{ title }</Link>
                <div className='flex items-center gap-1 mt-2'>
                  <img src={heartBlack} className='fill-black w-4' alt="like" />
                  <p className='text-[12px]'>{like}</p>
                </div>
            </div>
        </div>
        <h4 className="font-inter text-[9px] text-[#ABA5A5] px-[5px]">created by { author }</h4>
    </div>
  )
}
