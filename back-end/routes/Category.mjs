import { Router } from "express"
import { VerifyToken } from "../middleware/Middlewares.mjs"
import { Category } from '../Model/Models.mjs'

export const CategoryRouter = Router()

CategoryRouter.get('/categories', VerifyToken, async (request, response) => {
    const categories = await Category.find()
    response.json({ status: 'success', categories })
})