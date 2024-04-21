import React from 'react'
import { createBodyStructure, createHeadersStructure } from '../functions/Functions'
import Cookies from 'js-cookie'

export async function useAddFavorite(post_id) {
    const token = Cookies.get('token')
    const headers = createHeadersStructure([{key: "Authorization", value: `Bearer ${token}`}, {key: "Accept", value: "application/json"}])
    const body = createBodyStructure([{ key: "post_id", value: post_id }])
    const response = await fetch(`${import.meta.env.VITE_API_URL}/add-favorite`, { method: "PUT", headers, body })
    const result = await response.json()
    if(result.status == 'success') alert('Added to favorite')
    if(result.status == 'failed') alert('Failed added to favorite')
}
