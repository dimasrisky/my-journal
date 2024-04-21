import React, { useState, useEffect } from 'react'
import { createHeadersStructure } from '../functions/createHeadersStructure'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export function useCategory() {
    const navigate = useNavigate()
    let token = Cookies.get('token')
    const [ categories, setCategories ] = useState()
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/json"},
        { key: "Authorization", value: `Bearer ${token}`}
    ])
    useEffect(() => {
        async function getCategories(){
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`, { method: "GET", headers })
            const result = await response.json()
            if(result.status == 'success') setCategories(result.categories)
            if(result.status == 'failed') navigate('/login')
        }
        getCategories()
    }, [token])

    return categories
}
