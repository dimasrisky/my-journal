import Cookies from 'js-cookie'
import React, { useState, useMemo } from 'react'
import { createHeadersStructure } from '../functions/createHeadersStructure'

export function usePopularPosts() {
    const [ popularPosts, setPopularPosts ] = useState()
    const [ dirImage, setDirImage ] = useState()
    let token = Cookies.get('token')
    const headers = createHeadersStructure([ { key: "Authorization", value: `Bearer ${token}` } ])
    useMemo(() => {
        async function getPopularPosts(){
            const response = await fetch(`${import.meta.env.VITE_API_URL}/popular-posts`, { method: "GET", headers })
            const result = await response.json()
            if(result.status == 'success'){
                setPopularPosts(result.posts)
                setDirImage(result.dir_image)
            }
            if(result.status == 'failed') navigate('/login')
        }
        getPopularPosts()
    }, [token])

    return { popularPosts, dirImage }
}
