import Cookies from 'js-cookie'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = ({ theme }) => {
  const navigate = useNavigate()
  function Logout() {
    Cookies.remove('token')
    navigate('/')
  }
  

  return (
    <nav className="w-[90%] mx-auto flex justify-between items-center py-3">
        <h1 className={`font-poetsen text-[20px] ${theme == 'dark' ? 'text-white' : 'text-black' }`}>MyJournal.</h1>
        <div className={`flex items-center gap-4 ${theme == 'dark' ? 'text-white' : 'text-black' } text-[13px] font-inter`}>
            <Link to={'/'} >Home</Link>
            <span className={`w-[0.5px] ${theme == 'dark' ? 'bg-white' : 'bg-black' } h-4 bg-opacity-75`}></span>
            <Link to={'/articles'} href="">Article</Link>
        </div>
        <div className="flex items-center gap-2">
          {Cookies.get('token') ? (
            <>
              <button type='button' onClick={Logout} className={`px-12 py-3 border ${theme == 'dark' ? 'border-white bg-white text-black' : 'bg-black text-white' } rounded-md text-[10px] font-bold transition-all duration-300`}>Log Out</button>
            </>
          ) : (
            <>
            <Link to={'/login'} className={`px-12 py-2 bg-transparent  border ${theme == 'dark' ? 'text-white border-white hover:bg-white hover:text-black' : 'text-black border-black  hover:bg-black hover:text-white' } rounded-md text-[10px] transition-all duration-300`}>Sign In</Link>
            <Link to={'/register'} className={`px-12 py-2 ${theme == 'dark' ? 'bg-white text-black' : 'bg-black text-white'} rounded-md text-[10px]`}>Register</Link>
            </>
          )}
        </div>
    </nav>
  )
}
