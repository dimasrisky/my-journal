import Cookies from 'js-cookie'
import React from 'react'
import { createHeadersStructure } from '../functions/createHeadersStructure'

export async function useDeletePost(id) {
  const token = Cookies.get('token')
  const headers = createHeadersStructure([{key: "Authorization", value: `Bearer ${token}`}])
  const response = await fetch(`${import.meta.env.VITE_API_URL}/post?id=${id}`, { method: "DELETE", headers })
  const result = await response.json()
  console.log(result)
  if(result.status == 'success'){
    alert('Postingan berhasil dihapus')
    window.location.reload()
  }
  if(result.status == 'failed') alert('Postingan gagal dihapus')
}
