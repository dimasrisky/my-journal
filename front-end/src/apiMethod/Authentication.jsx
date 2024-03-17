import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


export const Register = async (body) => {
    try{
        const registrating = await fetch('http://127.0.0.1:8000/api/register', {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(body)
        })
        const response = await registrating.json()
        return response
    }catch(err){
        return {
            status : "failed",
            message : err
        }
    }
}

export const Login = async (body) => {
    try{
        const logining = await fetch('http://127.0.0.1:8000/api/login', {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(body) 
        })
        const response =  await logining.json()
        if(response.status == 'success'){
            Cookies.set('token', response.token)
            Cookies.set('role', response.role)
            return {
                status: "success",
            }
        }
    }catch(err){
        return {
            status : "failed",
            message : err
        }
    }
}

export const Logout = async (token) => {
    try{
        await fetch('http://127.0.0.1:8000/api/logout', {
            method: "GET",
            headers: {
                "Accept" : "application/json",
                "Authorization" : `Bearer ${token}`,
            }
        })
        return {
            status: "success"
        }
    }catch(err){
        return {
            status: "failed",
            message: err
        }
    }
}