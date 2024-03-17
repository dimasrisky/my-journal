import React from 'react'
import { Link } from 'react-router-dom'

export const Article = ({ id, image, category, title, author }) => {
  return (
    <div className="flex gap-3 mt-6">
        <div className={`w-[110px] h-[80px] rounded-[3px] bg-[url('${image}')] bg-cover bg-center bg-no-repeat`}></div>
        <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-1">
                <Link className="font-inter font-semibold text-[#1EB0B9] hover:text-blue-700 text-xs">{ category }</Link>
                <Link to={`detail/${id}`} className="font-inter font-semibold text-[15px] hover:text-[#1EB0B9] max-w-[900px]">{ title }</Link>
            </div>
            <h4 className="font-inter text-[10px] text-[#ABA5A5] px-[5px]">created by { author }</h4>
        </div>
    </div>
  )
}
