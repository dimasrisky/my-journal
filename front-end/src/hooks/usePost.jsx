import React, { useEffect, useState } from 'react'
import { createHeadersStructure } from '../functions/createHeadersStructure'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export function usePost(url) {
    const navigate = useNavigate()
    let token = Cookies.get('token')
    const [ post, setPost ] = useState()
    const [ dirImage, setDirImage ] = useState()
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/josn"},
        { key: "Authorization", value: `Bearer ${token}`}
    ])

    async function getPost(){
        const response = await fetch(url, { method: "GET", headers })
        const result = await response.json()
        if(result.status == 'failed') navigate(-1)
        setPost(result.post)
        setDirImage(result.dir_image)
    }

    useEffect(() => {
        getPost()
    }, [url])

    return { post, dirImage }
}
