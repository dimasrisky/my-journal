import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { Get } from '../apiMethod/Get'
import Cookies from 'js-cookie'
import { Loading } from '../components/Loading'
import { Footer } from '../components/Footer'

export const DetailArticle = () => {
  const { id } = useParams()
  const [ article, setArticle ] = useState()

  const getSpecifiedArticle = async () => {
    const getArticle = await Get(`http://127.0.0.1:8000/api/articles/${id}`, Cookies.get('token'))
    if(getArticle.status == 'success'){
      setArticle(getArticle.data)
    }
  }
  useEffect(() => {
    getSpecifiedArticle()
  }, [])

  return (
    <>
    {article ? (
      <>
      <Navbar theme={'light'} />
      <div className='w-[90vw] mx-auto flex flex-col gap-4 items-start mt-[70px]'>
        <div className='w-full flex flex-col gap-2'>
          <div className={`h-[700px] bg-[url('${article?.image}')] bg-cover bg-center bg-no-repeat`}></div>
          <h4 className='text-[18px] text-primaryBlue font-semibold'>{ article?.category.nama }</h4>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-[25px]'>{ article?.title }</h1>
          <p className='text-[16px]' dangerouslySetInnerHTML={{ __html: article?.description}}></p>
        </div>
      </div>
      <Footer />
      </>
    )
    :
    <Loading />
    }
    </>
  )
}