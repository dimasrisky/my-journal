import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    }
}, { collection: 'categories' })

export default mongoose.model('Category', CategorySchema)