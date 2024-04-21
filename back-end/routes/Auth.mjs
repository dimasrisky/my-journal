import { Router } from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import userModel from '../Model/User.mjs'
import bcrypt from 'bcrypt'
dotenv.config()

export const AuthRouter = Router()

AuthRouter.post('/register', async ( request, response ) => {
    const { username, email, password } = request.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    try{
        await userModel.create({ username, email, password: hashedPassword })
        response.json({ status: 'success', message: 'user has been created'})
    }catch(err){
        console.log(err)
        response.json({ status: 'failed', message: err})
    }
})

AuthRouter.post('/login', async (request, response) => {
    const { email, password } = request.body
    const user = await userModel.findOne({ email })
    if(!user) response.send('invalid credentials')
    const verifyPassword = bcrypt.compareSync(password, user.password)
    if(verifyPassword){
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        response.json({ status: 'success', token })
    }else{
        response.json({ status: 'failed', message: 'login failed'})
    }
})