import React, { useRef, useState } from 'react'
import { useCategory } from '../hooks/useCategory'
import { usePosts } from '../hooks/usePosts'
import { Article } from '../components/Components'

export function PostsSection() {
    const [ url, setUrl ] = useState(`${import.meta.env.VITE_API_URL}/posts?page=0`)
    const category = useCategory()
    const { posts, dirImage, nextPageUrl, prevPageUrl } = usePosts(url)
    const wrapperCategory = useRef()

    function paginateNext(){
        if(nextPageUrl != null) setUrl(nextPageUrl)
    }
    function paginatePrev(){
        if(prevPageUrl != null) setUrl(prevPageUrl)
    }

    function categorizedArticles(category){
        if(category === 'All'){
            setUrl(`${import.meta.env.VITE_API_URL}/posts?page=0`)
            return
        }
        setUrl(`${import.meta.env.VITE_API_URL}/posts/${category}?page=0`)
    }

  return (
    <div className="max-w-[90vw] mx-auto mt-[74px]">
        <div className="flex justify-between items-center">
            <h1 className="font-poetsen text-[32px]">Recomended For You.</h1>
            <div className="flex gap-4 items-center">
                <button className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="prev-button-category" onClick={() => wrapperCategory.current.scrollLeft -= 300}>
                    <img src="../src/assets/icons/arrow-right-black.svg" alt="arrow-left" className="rotate-180 w-[1rem]" />
                </button>
                <button className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="next-button-category" onClick={() => wrapperCategory.current.scrollLeft += 300}>
                    <img src="../src/assets/icons/arrow-right-black.svg" alt="arrow-right" className="w-[1rem]" />
                </button>
            </div>
        </div>
        {/* Wrapper Category Card */}
        <div ref={wrapperCategory} className="min-w-[100vw] mx-auto flex gap-5 mt-[29px] overflow-x-scroll scroll-smooth" id="wrapper-popular-category" style={{ scrollbarWidth: 'none' }}>
            <button onClick={() => categorizedArticles('All')} className="px-5 py-3 text-xs font-inter font-semibold bg-[#D9D9D9] hover:bg-slate-300 transition-all rounded-[25px]">All</button>
            { category?.map(eachCategory => <button type='button' onClick={() => categorizedArticles(eachCategory.category)} value={eachCategory._id} key={eachCategory._id} className="px-5 py-3 text-xs font-inter font-semibold bg-[#D9D9D9] hover:bg-slate-300 transition-all hover:scale-110 rounded-[25px]">{ eachCategory.category }</button>)}
        </div>

        {/* Article */}
        <div className="flex flex-col gap-4">
            { posts?.length === 0 && <h1 className='text-3xl my-9 font-bold text-center'>No Post</h1>}
            { posts?.map(post => <Article key={post._id} id={post._id} dirImage={dirImage} image={post.image} category={post.category} title={post.title} author={post.author.username} like={post.like} />) }
        </div>

        {/* Pagination */}
        <div className="text-center mt-6">
            <div className='flex items-center justify-center gap-4'>
                <button type='button' onClick={paginatePrev} className='px-6 py-2 rounded-xl text-xs text-white bg-[#999898] flex items-center gap-2'>
                    <img src="../src/assets/icons/arrow-right.svg" alt="previous" width={'20px'} className='fill-[#999898] rotate-180'/>
                    <p>Previous</p>
                </button>
                <button type='button' onClick={paginateNext} className='px-6 py-2 rounded-xl text-xs text-white bg-[#999898] flex items-center gap-2'>
                    <p>Next</p>
                    <img src="../src/assets/icons/arrow-right.svg" alt="next" width={'20px'} className='fill-[#999898]'/>
                </button>
            </div>
        </div>
    </div>
  )
}
