import React, { useRef, useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar'
import { Article } from '../components/Article';
import { PopularArticle } from '../components/PopularArticle';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { Get } from '../apiMethod/Get'
import Cookies from 'js-cookie';
import BgHeadline from '../assets/img/articles/bg-article.png'
import { Loading } from '../components/Loading';

export const ArticlePage = () => {
    const [ loading, setLoading ] = useState(true)
    const [ category, setCategory ] = useState(null)
    const [ popularArticle, setPopularArticle ] = useState(null)
    const [ article, setArticle ] = useState(null)
    const [ searchInput, setSearchInput ] = useState(null)
    const navigate = useNavigate()
    const wrapperPopularTopic = useRef()
    const wrapperCategory = useRef()

    // Fetching All Data
    const fetchingAllCategories = async () => {
        const categories = await Get('http://127.0.0.1:8000/api/categories', Cookies.get('token'))
        setCategory(categories.data)
    }
    const fetchingAllPopularArticles = async () => {
        const popularArticles = await Get('http://127.0.0.1:8000/api/popular-articles', Cookies.get('token'))
        setPopularArticle(popularArticles.data)
    }
    const fetchingArticles = async () => {
        const getArticles = await Get('http://127.0.0.1:8000/api/articles', Cookies.get('token'))
        setArticle(getArticles.data)
    }

    useMemo(() => {
        if(article != null && category != null && popularArticle != null) setLoading(false)
    }, [article, category, popularArticle])

    useEffect(() => {
        fetchingArticles()
        fetchingAllCategories()
        fetchingAllPopularArticles()
    }, [])

    const paginateArticle = ( state ) => {
        if(state === "previous" && !null){
            const getPreviousArticles = async () => {
                setLoading(true)
                const prevArticles = await Get(article?.prev_page_url, Cookies.get('token'))
                setLoading(false)
                setArticle(prevArticles.data)
            }
            getPreviousArticles()
        }else if(state === "next"){
            const getNextArticles = async () => {
                setLoading(true)
                const nextArticles = await Get(article?.next_page_url, Cookies.get('token'))
                setLoading(false)
                setArticle(nextArticles.data)
            }
            getNextArticles()
        }
    }

    const categorizedArticles = async ( event ) => {
        const response = await Get(`http://127.0.0.1:8000/api/articles?category=${event.target.value}`, Cookies.get('token'))
        setArticle(response.data)
    }

    const handleSearch = event => {
        event.preventDefault()
        navigate(`?search=${searchInput}`)
    }


  return (
    <>
    {loading === true ? <Loading /> : (
    <>
    {/* Headline */}
    <div className={`w-screen h-screen bg-[url('${BgHeadline}')] bg-cover bg-center bg-no-repeat py-5 relative`}>
        <Navbar theme={'dark'} />
        <div className="w-[90%] h-[90%] mx-auto flex flex-col justify-center items-center">
            <div>
                <h1 className="font-poetsen text-white text-[64px] text-center">Explore Every Knowledge In</h1>
                <h1 className="font-poetsen text-white text-[64px] text-center">The World</h1>
            </div>
            <form className="w-[532px] bg-white rounded-xl flex justify-between items-center py-4 px-6 mt-[44px]" onSubmit={handleSearch}>
                <div className="flex gap-4 items-center w-full">
                    <img src="./src/assets/icons/search.svg" alt="search" className="w-[2rem] hover:scale-110 hover:rotate-12 transition-all duration-200" />
                    <input type="text" placeholder="Type Something..." className="outline-none w-full" value={searchInput} onChange={event => setSearchInput(event.target.value)}/>
                </div>
                <button type="submit">
                    <img src="./src/assets/icons/arrow-right.svg" alt="submit" className="w-[2rem]" />
                </button>
            </form>
        </div>
    </div>


    {/* Popular Topic */}
    <div className="max-w-[90vw] mx-auto mt-[74px]">
        <div className="flex justify-between items-center">
            <h1 className="font-poetsen text-[32px]">Popular Topic.</h1>
            <div className="flex gap-4 items-center">
                <button className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="prev-button-article" onClick={() => wrapperPopularTopic.current.scrollLeft -= 300}>
                    <img src="./src/assets/icons/arrow-right-black.svg" alt="arrow-left" className="rotate-180 w-[1rem]" />
                </button>
                <button className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="next-button-article" onClick={() => wrapperPopularTopic.current.scrollLeft += 300}>
                    <img src="./src/assets/icons/arrow-right-black.svg" alt="arrow-right" className="w-[1rem]" />
                </button>
            </div>
        </div>
        {/* Wrapper Card */}
        <div ref={wrapperPopularTopic} className="min-w-[100vw] mx-auto flex gap-5 mt-[29px] overflow-x-scroll scroll-smooth" id="wrapper-popular-article" style={{ scrollbarWidth: 'none' }} >
            {popularArticle?.map(eachArticle => <PopularArticle key={eachArticle.id} id={eachArticle.id} image={eachArticle.image} category={eachArticle.category.nama} title={eachArticle.title} author={eachArticle.user.username} />) }
        </div>
    </div>

    {/* Article Section */}
    <div className="max-w-[90vw] mx-auto mt-[74px]">
        <div className="flex justify-between items-center">
            <h1 className="font-poetsen text-[32px]">Recomended For You.</h1>
            <div className="flex gap-4 items-center">
                <button className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="prev-button-category" onClick={() => wrapperCategory.current.scrollLeft -= 300}>
                    <img src="./src/assets/icons/arrow-right-black.svg" alt="arrow-left" className="rotate-180 w-[1rem]" />
                </button>
                <button className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="next-button-category" onClick={() => wrapperCategory.current.scrollLeft += 300}>
                    <img src="./src/assets/icons/arrow-right-black.svg" alt="arrow-right" className="w-[1rem]" />
                </button>
            </div>
        </div>
        {/* Wrapper Category Card */}
        <div ref={wrapperCategory} className="min-w-[100vw] mx-auto flex gap-5 mt-[29px] overflow-x-scroll scroll-smooth" id="wrapper-popular-category" style={{ scrollbarWidth: 'none' }}>
            { category?.map(eachCategory => <button type='button' onClick={categorizedArticles} value={eachCategory.id} key={eachCategory.id} className="px-5 py-3 text-xs font-inter font-semibold bg-[#D9D9D9] hover:bg-slate-300 transition-all rounded-[25px]">{ eachCategory.nama }</button>)}
        </div>

        {/* Article wrapper  */}

        <div className="flex flex-col gap-4">
        {/* article   */}
        { article?.data.map(eachArticle => <Article key={eachArticle.id} id={eachArticle.id} image={eachArticle.image} category={eachArticle.category.nama} title={eachArticle.title} author={eachArticle.user.username} />) }
        </div>

        <div className="text-center mt-6">
            <div className='flex items-center justify-center gap-4'> 
                <button type='button' onClick={() => paginateArticle("previous")} className='px-6 py-2 rounded-xl text-xs text-white bg-[#999898] flex items-center gap-2'>
                    <img src="./src/assets/icons/arrow-right.svg" alt="previous" width={'20px'} className='fill-[#999898] rotate-180'/>
                    <p>Previous</p>
                </button>
                <button type='button' onClick={() => paginateArticle("next")} className='px-6 py-2 rounded-xl text-xs text-white bg-[#999898] flex items-center gap-2'>
                    <p>Next</p>
                    <img src="./src/assets/icons/arrow-right.svg" alt="next" width={'20px'} className='fill-[#999898]'/>
                </button>
            </div>
        </div>
    </div>

    <Link to={'create'} className="p-4 bg-[#101010] rounded-full fixed z-20 right-10 bottom-8">
        <img src="./src/assets/icons/add.svg" alt="add" width={'25px'} className='fill-white'/>
    </Link>
    <Footer />
    </>
    )}
    </>
  )
}
