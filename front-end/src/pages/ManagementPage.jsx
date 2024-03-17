import React, { useEffect, useState } from 'react'
import bgHeadline from '../assets/img/management/bg-management.jpg'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Get } from '../apiMethod/Get'
import Cookies from 'js-cookie'
import { Loading } from '../components/Loading'
import { Delete } from '../apiMethod/Delete'


const Article = ({ id, title, image, category }) => {

  const handleDelete = async ( id ) => {
    try{  
      await Delete(`http://127.0.0.1:8000/api/articles/${ id }`, Cookies.get('token'))
      window.location.reload()
    }catch(err){
      handleDelete()
    }
  }

  return (
    <div className='w-full flex gap-4'>
      <div className={`w-[170px] h-[120px] bg-[url('${ image }')] rounded-md bg-cover bg-center bg-no-repeat`}></div>
      <div className='flex flex-col justify-between w-[70%]'>
        <div className='flex flex-col gap-1 text-[18px]'>
          <Link className='font-semibold text-[15px] text-[#4091DC]'>{ category }</Link>
          <Link to={`../detail/${ id }`} className='font-inter font-semibold text-[18px] hover:text-[#4091DC] transition-all duration-300'>{ title }</Link>
        </div>
        <div className='flex items-center gap-2 w-full justify-end'>
          <Link className='p-2 bg-[#046202] rounded-full'>
            <img src="../src/assets/icons/edit.svg" alt="edit" className='w-[0.8rem]'/>
          </Link>
          <button type='button' onClick={ () => handleDelete( id ) } className='p-2 bg-[#FF2626] rounded-full'>
            <img src="../src/assets/icons/delete.svg" alt="delete" className='w-[0.9rem]' />
          </button>
        </div>
      </div>
    </div>
  )
}

export const ManagementPage = () => {
  const [ articles, setArticles ] = useState(null)

  const getArticles = async () => {
    const articles = await Get('http://127.0.0.1:8000/api/userArticles' ,Cookies.get('token'))
    if(articles.status === 'success'){
      setArticles(articles.data)
    }else if(articles.status === 'failed'){
      getArticles()
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <>
    {articles != null ? (
      <>
      {/* Headline */}
        <div className={`w-screen h-screen bg-[url(${bgHeadline})] bg-cover bg-center bg-no-repeat`}>
          <Navbar theme={'dark'} />
          <div className='font-poetsen w-screen h-[90%] flex justify-center items-center text-white flex-col gap-3'>
            <h1 className='text-[95px]'>Manage Your Contents</h1>
            <h1 className='text-[75px]'>Right Here</h1>
          </div>
        </div>
  
      {/* Article */}
      <div className='w-[90vw] mx-auto mt-[80px]'>
        <Link to={'../create'} className='w-[7rem] py-2 bg-primaryBlue flex justify-center items-center gap-2 rounded-md'>
          <img src="../src/assets/icons/add.svg" alt="add" className='w-[1rem]'/>
          <h3 className='font-semibold text-white'>Add</h3>
        </Link>
        <div className='flex flex-col mt-[40px] gap-[37px]'>
          {/* Item */}
          { articles.map(eachArticle => <Article key={eachArticle.id} id={eachArticle.id} title={eachArticle.title} image={eachArticle.image} category={eachArticle.category.nama} />) }
        </div>
      </div>
  
      <Footer />
      </>
    ) : <Loading /> }
    </>
  )
}