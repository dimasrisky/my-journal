import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Register } from '../apiMethod/Authentication' 
import { useNavigate } from 'react-router-dom'
import { Loading } from '../components/Loading'

export const RegisterPage = () => {
    const navigate = useNavigate()
    const [ loading, setLoading ] = useState(false)
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    
    const registerHandle = async (e) => {
        e.preventDefault()
        setLoading(true)
        const regis = await Register({
            "username" : username,
            "email" : email,
            "password" : password
        });
        if(regis.status == "success"){
            navigate('/login')
            setLoading(false)
        }else{
            navigate('/register')
            setLoading(false)
        }
        
    }

    return (
    <>
    {loading === true ? <Loading /> : (
    <div className="w-screen h-screen flex">
        <div className="w-[50%] bg-[url('./src/assets/img/auth/bg-register.jpg')] bg-cover bg-no-repeat"></div>
        <div className="w-[50%] flex justify-center items-center">
            <form className="w-[450px] border border-black rounded-lg px-[50px]" onSubmit={registerHandle}>
                <h1 className="font-poetsen text-[36px] text-center my-[68px]">MyJournal.</h1>
                <div className="flex flex-col gap-[4px]">
                    <label htmlFor="username" className="font-inter font-semibold text-[16px]">Username :</label>
                    <input type="username" id="username" name="username" onChange={e => setUsername(e.target.value)} value={username} placeholder="Type your username..." className="border-b border-[#9C9595] font-semibold text-black text-[11px] px-1 py-1 outline-none" />
                </div>
                <div className="flex flex-col gap-[4px] mt-[30px]">
                    <label htmlFor="email" className="font-inter font-semibold text-[16px]">Email :</label>
                    <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} value={email}  placeholder="Type your email..." className="border-b border-[#9C9595] font-semibold text-black text-[11px] px-1 py-1 outline-none" />
                </div>
                <div className="flex flex-col gap-[4px] mt-[30px]">
                    <label htmlFor="password" className="font-inter font-semibold text-[16px]">Password :</label>
                    <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)} value={password}  placeholder="Type your username..." className="border-b border-[#9C9595] font-semibold text-black text-[11px] px-1 py-1 outline-none" />
                </div>
                <h4 className="mt-[57px] my-[30px] text-center font-inter text-[11px]">Already Have Account ? <Link to={'/login'} className="font-semibold">Login</Link></h4>
                <div className="text-center flex justify-center gap-[20px] items-center mb-[37px]">
                    <button type="submit" className="px-[60px] py-2 bg-transparent text-black font-inter font-semibold text-[13px] border border-black rounded-md">Register</button>
                    <button type="reset" className="px-[60px] py-2 bg-black text-white font-inter font-semibold text-[13px] rounded-md">Clear</button>
                </div>
            </form>
        </div>
    </div>
    )}
    </>
    )
}
