import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const FloatingButtonAccount = () => {
  const [ clicked, setClicked ] = useState(false)
  return (
    <Link to={'/articles/account'} onMouseEnter={() => setClicked(true)} onMouseLeave={() => setClicked(false)} className={`p-4  bg-[#101010] rounded-full fixed z-20 right-10 bottom-8 `}>
      <div className='flex items-center gap-3'>
        <img src="../src/assets/icons/account.svg" alt="add" width={'25px'} className='fill-white'/>
        <h1 className={`text-white ${clicked ? '' : 'hidden'} font-semibold text-sm transition-all duration-300`}>My Account</h1>
      </div>
    </Link>
  )
}
