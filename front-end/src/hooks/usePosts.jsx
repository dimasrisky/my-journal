import { useContext, useEffect, useState } from "react"
import { createHeadersStructure } from "../functions/createHeadersStructure"
import Cookies from "js-cookie"
import { LoadingContext } from "../contexts/LoadingContext"

export function usePosts(url) {
    const { setIsLoading } = useContext(LoadingContext)
    const [ posts, setPosts ] = useState()
    const [ dirImage, setDirImage ] = useState()
    const [ nextPageUrl, setNextPageUrl ] = useState()
    const [ prevPageUrl, setPrevPageUrl ] = useState()
    let token = Cookies.get('token')
    async function getPost(){
        setIsLoading(true)
        const headers = createHeadersStructure([
            { key: "Accept", value: "application/json"},
            { key: "Authorization", value: `Bearer ${token}`}
        ])
        const response = await fetch(url, {method: "GET", headers})
        const result = await response.json()
        if(result.status == 'success'){
            setPosts(result.posts)
            setDirImage(result.dir_image)
            setNextPageUrl(result.next_page)
            setPrevPageUrl(result.previous_page)
        } 
        if(result.status == 'failed') navigate('/login')
        setIsLoading(false)
    }
    useEffect(() => {
        getPost()
    }, [token, url])

    return { posts, dirImage, nextPageUrl, prevPageUrl }
}