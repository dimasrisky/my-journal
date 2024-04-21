import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import { AuthRouter, UserRouter, PostRouter, CategoryRouter } from './routes/Routers.mjs'
import fileUpload from 'express-fileupload'
import path from 'path'
dotenv.config()
const app = express()
mongoose.connect(process.env.DB_URL)

// middlewares
app.use(fileUpload())
app.use(express.static(path.join(import.meta.dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

// routes
app.use('/api/auth', AuthRouter)
app.use('/api', UserRouter)
app.use('/api', PostRouter)
app.use('/api', CategoryRouter)

app.listen(process.env.SERVER_PORT, () => console.log(`server berjalan di port ${ process.env.SERVER_PORT }`))