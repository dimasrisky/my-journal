import React, { useEffect, useState } from 'react'
import { createHeadersStructure } from '../functions/createHeadersStructure'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export function useUserPosts() {
    const navigate = useNavigate()
    const [ posts, setPosts ] = useState()
    const [ dirImage, setDirImage ] = useState()
    const [ totalLikes, setTotalLikes ] = useState(0)
    let token = Cookies.get('token')
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/json" },
        { key: "Authorization", value: `Bearer ${token}`}
    ])

    async function getUserPosts(){
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user-posts`, { method: "GET", headers })
        const result = await response.json()
        if(result.status == 'failed') navigate('/')
        setPosts(result.posts)
        setDirImage(result.dir_image)
        setTotalLikes(result.total_likes)
    }

    useEffect(() => {
        getUserPosts()
    }, [token])

    return { posts, dirImage, totalLikes }
}
