import React, { useState, useEffect} from 'react'
import { TopArticle } from './TopArticle'
import { Link } from 'react-router-dom'
import { Loading } from './Loading'

export const NewestArticle = () => {
    const [ loading, setLoading ] = useState(true)
    const [ topArticle, setTopArticle ] = useState()
    const getNewestArticle = async () => {
        const fetchNewest = await fetch(`http://127.0.0.1:8000/api/newest-articles`)
        const result = await fetchNewest.json()
        setTopArticle(result)
        setLoading(false)
    }
    useEffect(() => {
        getNewestArticle()
    }, [])

  return (
    <>
    {loading === true ? <Loading /> : (
    <div className="w-[1247px] mx-auto mt-[116px]">
        <div>
            <h1 className="font-poetsen font-bold text-4xl">Newest Articles.</h1>
            <div className="h-1 w-14 rounded-md bg-black"></div>
        </div>
        <div className="w-full flex justify-between mt-[47px] gap-5">
            {/* Left Article */}
            <div className="w-[685px]">
                <img src={ topArticle && topArticle[0].image } alt="article" />
                <div className="h-[122px] flex flex-col justify-between mt-3">
                    <div>
                        <h4 className="font-semibold text-primaryBlue text-xs font-inter">{ topArticle && topArticle[0].category.nama }</h4>
                        <Link to={`articles/detail/${ topArticle && topArticle[0].id }`} href="#" className="font-inter font-bold text-2xl hover:text-blue-500">{ topArticle && topArticle[0].title }</Link>
                    </div>
                    <p className="text-xs opacity-60 font-medium">Created By { topArticle && topArticle[0].user.username }</p>
                </div>
            </div>

            {/* right article */}
            <div className="w-[50%]">
                <h1 className="font-inria text-[#B40000] text-3xl text-center">Top Article</h1>
                <div className="flex flex-col mt-4 gap-[28px]">
                    <TopArticle id={topArticle && topArticle[1].id} image={topArticle && topArticle[1].image} category={topArticle && topArticle[1].category.nama} title={topArticle && topArticle[1].title} author={topArticle && topArticle[1].user.username}/>
                    <TopArticle id={topArticle && topArticle[2].id} image={topArticle && topArticle[2].image} category={topArticle && topArticle[2].category.nama} title={topArticle && topArticle[2].title} author={topArticle && topArticle[2].user.username}/>
                    <TopArticle id={topArticle && topArticle[3].id} image={topArticle && topArticle[3].image} category={topArticle && topArticle[3].category.nama} title={topArticle && topArticle[3].title} author={topArticle && topArticle[3].user.username}/>
                    <TopArticle id={topArticle && topArticle[4].id} image={topArticle && topArticle[4].image} category={topArticle && topArticle[4].category.nama} title={topArticle && topArticle[4].title} author={topArticle && topArticle[4].user.username}/>
                </div>
            </div>
        </div>

        {/* more button */}
        <Link to={'/articles'} className="inline-block w-full mt-[35px] bg-transparent border border-[#D9D9D9] text-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-white transition-all duration-300 font-inria text-center py-2 rounded-[5px]">
            More
        </Link>
    </div>
    )}    
    </>
  )
}
