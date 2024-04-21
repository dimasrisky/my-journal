import React from 'react'
import { createHeadersStructure } from './createHeadersStructure'
import Cookies from 'js-cookie'

export async function increasePostLike(post_id, user_id) {
  const headers = createHeadersStructure([
    { key: "Authorization", value: `Bearer ${Cookies.get('token')}`}
  ])
  try{
    await fetch(`${import.meta.env.VITE_API_URL}/inc-like?post_id=${post_id}&user_id=${user_id}`, { method: "PUT", headers })
    alert('you liked this post !')
  }catch(err){
    alert('failed to like')
  }
}
