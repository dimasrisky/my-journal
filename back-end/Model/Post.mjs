import mongoose from "mongoose"

const AuthorSchema = new mongoose.Schema({
    _id: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    username: { type : String, required: true },
})

const PostSchema = new mongoose.Schema({
    uid: { type: Number, required: true },
    author: AuthorSchema,
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    like: { type: Number, default: 0 },
    liked_by: { type: [ mongoose.SchemaTypes.ObjectId ], default: [] }
})

export default mongoose.model('Post', PostSchema)