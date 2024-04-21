import Cookies from 'js-cookie'
import React from 'react'
import { createHeadersStructure, createBodyStructure } from '../functions/Functions'

export async function useCreatePost(post) {
    const token = Cookies.get('token')
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/json" },
        { key: "Authorization", value: `Bearer ${token}`}
    ])
    const body = createBodyStructure([
        { key: "uid", value: Math.random() * 100 },
        { key: "author_id", value: post.author._id },
        { key: "author_username", value: post.author.username },
        { key: "title", value: post.title },
        { key: "content", value: post.content },
        { key: "category", value: post.category },
        { key: "image", value: post.image },
    ])

    const response = await fetch(`${import.meta.env.VITE_API_URL}/post`, { method: "POST", headers, body })
    const result = await response.json()
    if(result.status == 'failed') alert('Gagal mengunggah Post')
    if(result.status == 'success') alert('Post berhasil di unggah')
}
