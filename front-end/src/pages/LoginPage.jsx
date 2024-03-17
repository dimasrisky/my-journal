import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Login } from '../apiMethod/Authentication'
import { Loading } from '../components/Loading'

export const LoginPage = () => {
    const navigate = useNavigate()
    const [ loading, setLoading ] = useState(false)
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const loginHandle = async (e) => {
        e.preventDefault()
        setLoading(true)
        const login = await Login({            
            "email" : email,
            "password" : password
        })
        if(login.status == "success"){
            navigate('/articles')
            setLoading(false)
        }else{
            console.log(login)
            setLoading(false)
        }   
    }
    
    return (
        <>
        {loading === true ? <Loading /> : (
        <div className="w-screen h-screen flex">
            <div className="w-[50%] bg-[url('./src/assets/img/auth/bg-login.jpg')] bg-cover bg-no-repeat bg-center"></div>
            <div className="w-[50%] flex justify-center items-center">
                <form className="w-[450px] border border-black rounded-lg px-[50px]" onSubmit={loginHandle}>
                    <h1 className="font-poetsen text-[36px] text-center my-[68px]">MyJournal.</h1>
                    <div className="flex flex-col gap-[4px]">
                        <label htmlFor="email" className="font-inter font-semibold text-[16px]">Email :</label>
                        <input type="email" id="email"  onChange={e => setEmail(e.target.value)} value={email} name="email" placeholder="Type your username..." className="border-b border-[#9C9595] font-semibold text-black text-[11px] px-1 py-1 outline-none" required />
                    </div>
                    <div className="flex flex-col gap-[4px] mt-[35px]">
                        <label htmlFor="password" className="font-inter font-semibold text-[16px]">Password :</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} name="password" placeholder="Type your username..." className="border-b border-[#9C9595] font-semibold text-black text-[11px] px-1 py-1 outline-none" required />
                    </div>
                    <h4 className="mt-[57px] my-[30px] text-center font-inter text-[11px]">Dont Have Account ? <Link to={'/register'} className="font-semibold">Register</Link></h4>
                    <div className="text-center flex justify-center gap-[20px] items-center mb-[37px]">
                        <button type="submit" className="px-[70.5px] py-2 bg-transparent text-black font-inter font-semibold text-[13px] border border-black rounded-md">Login</button>
                        <button type="reset" className="px-[70.5px] py-2 bg-black text-white font-inter font-semibold text-[13px] rounded-md">Clear</button>
                    </div>
                </form>
            </div>
        </div>
        )}        
        </>
    )
}
