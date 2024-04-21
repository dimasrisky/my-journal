import React, { useContext, useEffect, useState } from 'react'
import { createHeadersStructure } from '../functions/createHeadersStructure'
import Cookies from 'js-cookie'
import { LoadingContext } from '../contexts/LoadingContext'

export function useFavoritesPosts() {
    const token = Cookies.get('token')
    const { setIsLoading } = useContext(LoadingContext)
    const [ posts, setPosts ] = useState()
    const [ dirImage, setDirImage ] = useState()
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/json" },
        { key: "Authorization", value: `Bearer ${token}`}
    ])
    useEffect(() => {
        async function getPost(){
            setIsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_API_URL}/posts-favorites`, { method: "GET", headers })
            const result = await response.json()
            if(result.status == 'failed') alert('failed to query')
            setPosts(result.posts)
            setDirImage(result.dir_image)
            setIsLoading(false)
        }
        getPost()
    }, [token])



    return { posts, dirImage }
}
