import React from 'react'
import { createHeadersStructure, createBodyStructure } from '../../functions/Functions'

export async function useRegister(username, email, password) {
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/json" },
    ])
    const body = createBodyStructure([
        { key: "username", value: username },
        { key: "email", value: email },
        { key: "password", value: password }
    ])

    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, { method: "POST", headers, body })
        const result = await response.json()
        return result
    }catch(error){
        console.log(error)
        return { status: "failed", message: error }
    }

}
