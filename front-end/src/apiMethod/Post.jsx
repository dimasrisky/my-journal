import React from 'react'

export const Post = async (url, body, token) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization" : `Bearer ${token}`,
            "Accept" : "application/json",
        },
        body: body
    }
    try{
        const response = await fetch(url, options)
        const result = await response.json()
        return {
            status: "success",
            message: result
        }
    }catch(err){
        return false
    }
}