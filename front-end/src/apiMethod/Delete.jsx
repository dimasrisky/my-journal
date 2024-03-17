import React from 'react'

export const Delete = async (url, token) => {
    const option = {
        method: "DELETE",
        headers: {
            "Accept" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }
    try{
        const request = await fetch(url, option)
    }catch(err){
        return {
            status: "failed",
            message: err
        }
    }
}
