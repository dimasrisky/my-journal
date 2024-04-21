import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { createHeadersStructure } from '../functions/createHeadersStructure'
import { useNavigate } from 'react-router-dom'

export function useCurrentUser() {
    const [ user, setUser ] = useState()
    const navigate = useNavigate()
    const token = Cookies.get('token')
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/json" },
        { key: "Authorization", value: `Bearer ${token}` }
    ])

    async function getUser(){
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, { method: "GET", headers })
        const result = await response.json()
        if(result.status == 'failed'){
            navigate('/login')
            return
        }
        setUser(result.user)
    }

    useEffect(() => {
        getUser()
    }, [token])

    return user
}
