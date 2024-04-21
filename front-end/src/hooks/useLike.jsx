import Cookies from 'js-cookie'
import React from 'react'
import { createHeadersStructure } from '../functions/Functions'

export async function useLike(post_id) {
    const token = Cookies.get('token')
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/json" },
        { key: "Accept", value: "application/json" }
    ])
    const response = await fetch(`${import.meta.env.VITE_API_URL}/increase-like?post_id=${post_id}`)
    const result = await response.json()
    if(result.status == 'failed') alert('Failed to liked this article')
    if(result.status == 'success') alert('You liked this article')
}
