import React, { useState } from 'react'
import { useRegister } from '../hooks/Hooks'
import { Navbar } from './Components'
import { Link, useNavigate } from 'react-router-dom'

export const RegisterForm = ({ setLoading }) => {
    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    
    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const register = await useRegister(username, email, password)
        console.log(register)
        if(register.status == 'success'){
            navigate('/login')
            alert('Register Berhasil')
            setLoading(false)
        }else if(register.status == 'failed'){
            alert('Register Gagal')
            setLoading(false)
        }
    }

  return (
    <>
    <div className='hidden lg:flex'>
        <Navbar theme={'light'}/>
    </div>
    <div className="w-screen h-screen flex justify-center items-center">
        <form className="w-[95%] sm:w-[70%] lg:w-[50%] rounded-lg px-[50px]" onSubmit={submitForm}>
            <h1 className='font-bold text-center text-2xl my-6'>Create Your Account</h1>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="username" className='font-medium text-sm text-black'>Username</label>
                    <input type="username" id="username" onChange={e => setUsername(e.target.value)} value={username} name="username" className="border border-[#343434] font-light text-black text-[11px] p-2 text-sm rounded-[3px] outline-none focus-within:bg-transparent" required />
                    <p className='text-xs text-red-600'>{username == '' && 'username required'}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='font-medium text-sm text-black'>Email</label>
                    <input type="email" id="email"  onChange={e => setEmail(e.target.value)} value={email} name="email" className="border border-[#343434] font-light text-black text-[11px] p-2 text-sm rounded-[3px] outline-none focus-within:bg-transparent" required />
                    <p className='text-xs text-red-600'>{email == '' && 'email required'}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='font-medium text-sm text-black'>Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} name="password" className="border border-[#343434] font-semibold text-black text-[11px] rounded-[3px] p-2 outline-none text-sm focus-within:bg-transparent" required />
                    <p className='text-xs text-red-600'>{password == '' && 'password required'}</p>
                </div>
                <button type='submit' className='bg-[#383333] hover:bg-[#605858] transition-all duration-300 text-white text-xs w-full rounded-[5px] py-3 uppercase'>register</button>
                <p className='text-xs text-center'>Already have account ? <Link to={'/login'} className='text-[#8094DB]'>sign in</Link></p>
            </div>
        </form>
    </div>
    </>
  )
}
