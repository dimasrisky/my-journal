import React from 'react'
import { Link } from 'react-router-dom'
import { TopArticle } from './Components'
import { useNewestPosts } from '../hooks/useNewestPosts'

export const NewestArticle = () => {
  const { newestPosts, dirImage } = useNewestPosts()
  return (
    <>
        <div className="w-[1247px] mx-auto mt-[116px]">
            <div>
                <h1 className="font-poetsen font-bold text-4xl">Newest Articles.</h1>
                <div className="h-1 w-14 rounded-md bg-black"></div>
            </div>
            <div className="w-full flex justify-between mt-[47px] gap-5">
                {/* Left Article */}
                <div className="w-[685px]">
                    <img src={`${dirImage}/${ newestPosts && newestPosts[0]?.image}`} alt="article" />
                    <div className="h-[122px] flex flex-col justify-between mt-3">
                        <div>
                            <h4 className="font-semibold text-primaryBlue text-xs font-inter">{  newestPosts && newestPosts[0]?.category }</h4>
                            <Link to={`articles/detail/${  newestPosts && newestPosts[0]?._id }`} href="#" className="font-inter font-bold text-2xl hover:text-blue-500">{  newestPosts && newestPosts[0]?.title }</Link>
                        </div>
                        <p className="text-xs opacity-60 font-medium">Created By {  newestPosts && newestPosts[0]?.author.username }</p>
                    </div>
                </div>

                {/* right article */}
                <div className="w-[50%]">
                    <h1 className="font-inria text-[#B40000] text-3xl text-center">Top Article</h1>
                    <div className="flex flex-col mt-4 gap-[28px]">
                        <TopArticle id={ newestPosts && newestPosts[1]?._id} dirImage={dirImage} image={ newestPosts && newestPosts[1]?.image} category={ newestPosts && newestPosts[1]?.category} title={ newestPosts && newestPosts[1]?.title} author={ newestPosts && newestPosts[1]?.author.username}/>
                        <TopArticle id={ newestPosts && newestPosts[2]?._id} dirImage={dirImage} image={ newestPosts && newestPosts[2]?.image} category={ newestPosts && newestPosts[2]?.category} title={ newestPosts && newestPosts[2]?.title} author={ newestPosts && newestPosts[2]?.author.username}/>
                        <TopArticle id={ newestPosts && newestPosts[3]?._id} dirImage={dirImage} image={ newestPosts && newestPosts[3]?.image} category={ newestPosts && newestPosts[3]?.category} title={ newestPosts && newestPosts[3]?.title} author={ newestPosts && newestPosts[3]?.author.username}/>
                        <TopArticle id={ newestPosts && newestPosts[4]?._id} dirImage={dirImage} image={ newestPosts && newestPosts[4]?.image} category={ newestPosts && newestPosts[4]?.category} title={ newestPosts && newestPosts[4]?.title} author={ newestPosts && newestPosts[4]?.author.username}/>
                    </div>
                </div>
            </div>

            {/* more button */}
            <Link to={'/articles'} className="inline-block w-full mt-[35px] bg-transparent border border-[#D9D9D9] text-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-white transition-all duration-300 font-inria text-center py-2 rounded-[5px]">
                More
            </Link>
        </div>
    </>
  )
}
