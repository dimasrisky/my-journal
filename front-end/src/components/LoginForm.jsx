import React, { useState } from 'react'
import { useLogin } from '../hooks/Authentication/useLogin'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export const LoginForm = ({ setLoading }) => {
    const navigate = useNavigate()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const login = await useLogin(email, password)
        if(login.status == 'success'){
            Cookies.set('token', login.token, {expires: 1})
            alert('Login Berhasil')
            navigate('/articles')
            setLoading(false)
        }else if(login.status == 'failed'){
            alert('Login Gagal')
            console.log(login.message)
            setLoading(false)
        }
    }
    
    return(
    <>
    <div className="w-screen h-screen flex flex-row-reverse">
        <div className='w-[45%] hidden lg:block relative'>
            <div className='w-full h-full bg-opacity-85 bg-[#DFA802] absolute flex justify-center items-center border'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='leading-[80px] tracking-[3px] text-white relative -top-[2rem] font-extrabold text-[65px]'>Start <br /> Creating <br /> Your <br /> Articles</h1>
                    <p className='text-white max-w-[440px] text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium hic fugit quibusdam. Consequuntur totam consectetur culpa harum excepturi dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="w-full h-full bg-[url('./src/assets/img/auth/bg-login.jpg')] bg-cover bg-left bg-no-repeat"></div>
        </div>
        <div className="w-screen lg:w-[57%] border flex justify-center items-center">
            <Link to={'/'} className='absolute font-poetsen text-[20px] top-6 left-10'>MyJournal.</Link>
            <form className="w-[70%] rounded-lg px-[50px]" onSubmit={submit}>
                <h1 className='font-bold text-center text-2xl my-11'>Sign in with your email</h1>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-medium text-sm text-black'>Email</label>
                        <input type="email" id="email"  onChange={e => setEmail(e.target.value)} value={email} name="email" className="border border-[#343434] font-light text-black text-[11px] p-2 text-sm rounded-[3px] outline-none focus-within:bg-transparent" required />
                        <p className='text-xs text-red-600'>{email === '' && "Email Required"}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='font-medium text-sm text-black'>Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} name="password" className="border border-[#343434] font-semibold text-black text-[11px] rounded-[3px] p-2 outline-none text-sm focus-within:bg-transparent" required />
                        <p className='text-xs text-red-600'>{password === '' && "Password Required"}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="remember-me" id="remember-me" />
                        <label htmlFor="remember-me" className='text-[#807D7D] text-xs'>Remember me</label>
                    </div>
                    <button type='submit' className='bg-[#383333] hover:bg-[#605858] transition-all duration-300 text-white text-xs w-full rounded-[5px] py-3 uppercase'>Login</button>
                    <p className='text-xs text-center'>Didn`t have account ? <Link to={'/register'} className='text-[#8094DB]'>sign up</Link></p>
                </div>
            </form>
        </div>
    </div>
    </>
    )
}
