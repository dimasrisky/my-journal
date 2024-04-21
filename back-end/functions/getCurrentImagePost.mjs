import { Post } from '../Model/Models.mjs'

export async function getCurrentImagePost(post_id) {
  const getCurrentPost = await Post.findById(post_id)
  return getCurrentPost.image
}
