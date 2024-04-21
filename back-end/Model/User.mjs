import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favorites_posts: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: 'Post',
        default: []
    }
})

export default mongoose.model('User', UserSchema)
