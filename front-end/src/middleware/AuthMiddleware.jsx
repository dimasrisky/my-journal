import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthMiddleware = () => {
  if(Cookies.get("token") && Cookies.get('role') == "registered_user"){
    return <Outlet />
  }else{
    return <Navigate to={'/login'} />
  }
}