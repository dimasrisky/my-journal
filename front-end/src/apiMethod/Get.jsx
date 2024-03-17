import react from 'react'

export async function Get(url, token) {
    try{
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })
        const result = await response.json()
        return {
            status: "success",
            data: result
        }
    }catch(err){
        return {
            status: 'failed',
            message: err
        }
    }
}