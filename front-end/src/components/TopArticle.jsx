import React from 'react'
import { Link } from 'react-router-dom'

export const TopArticle = ({id, image, category, title, author}) => {
  return (
     <div className="w-[504px] flex justify-center gap-[20px]">
        <img src={image} className="w-[140px] rounded-md" />
        <div className="flex flex-col justify-between">
            <div>
                <h4 className="font-semibold text-primaryBlue text-xs font-inter">{category}</h4>
                <Link to={`articles/detail/${id}`} className="font-inter font-bold text-base hover:text-blue-500">{title}</Link>
            </div>
            <p className="text-xs opacity-60 font-medium">Created By {author}</p>
        </div>
    </div>
  )
}