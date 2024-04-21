import React, { useRef } from 'react'
import { usePopularPosts } from '../hooks/usePopularPosts';
import { PostsSection, FloatingButtonAccount, Footer, PopularArticle, Navbar } from '../components/Components'

export const ArticlePage = () => {
  const { popularPosts, dirImage } = usePopularPosts()
  const wrapperPopularTopic = useRef()
  return (
    <>
    {/* Headline */}
    <Navbar theme={'light'} />

    {/* Popular Topic */}
    <div className="max-w-[90vw] mx-auto mt-[74px]">
        <div className="flex justify-between items-center">
            <h1 className="font-poetsen text-[32px]">Popular Topic.</h1>
            <div className="flex gap-4 items-center">
                <button className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="prev-button-article" onClick={() => wrapperPopularTopic.current.scrollLeft -= 300}>
                    <img src="../src/assets/icons/arrow-right-black.svg" alt="arrow-left" className="rotate-180 w-[1rem]" />
                </button>
                <button className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="next-button-article" onClick={() => wrapperPopularTopic.current.scrollLeft += 300}>
                    <img src="../src/assets/icons/arrow-right-black.svg" alt="arrow-right" className="w-[1rem]" />
                </button>
            </div>
        </div>
        {/* Wrapper Card */}
        <div ref={wrapperPopularTopic} className="min-w-[100vw] mx-auto flex gap-5 mt-[29px] overflow-x-scroll scroll-smooth" id="wrapper-popular-article" style={{ scrollbarWidth: 'none' }} >
            {popularPosts?.map(post => <PopularArticle key={post._id} id={post._id} dirImage={dirImage} image={post.image} category={post.category.nama} title={post.title} author={post.author.username} like={post.like} />) }
        </div>
    </div>

    {/* Posts Section */}
    <PostsSection />

    {/* Menu */}
    <FloatingButtonAccount />

    {/* Footer */}
    <Footer />

    </>
  )
}
