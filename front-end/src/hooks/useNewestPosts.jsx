import React, { useState, useEffect } from 'react'

export function useNewestPosts() {
    const [ newestPosts, setNewestPosts ] = useState()
    const [ dirImage, setDirImage ] = useState()
    useEffect(() => {
        async function getNewestPosts(){
            const response = await fetch(`${import.meta.env.VITE_API_URL}/newest-posts`)
            const result = await response.json()
            setNewestPosts(result.posts)
            setDirImage(result.dir_image)
        }
        getNewestPosts()
    }, [])

    return { newestPosts, dirImage }
}
