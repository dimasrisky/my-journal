import React from 'react'

export const GetCurrentUser = async (token) => {
    try{
        const currentUser = await fetch('http://127.0.0.1:8000/api/user', {
            method: "GET",
            headers: {
                "Accept" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })
        const result = await currentUser.json()
        return {
            status: "success",
            data: result
        }
    }catch(err){
        return {
            status: "failed",
            message: err
        }
    }
}
