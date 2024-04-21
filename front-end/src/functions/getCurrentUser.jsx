import Cookies from 'js-cookie'
import { createHeadersStructure } from '../functions/createHeadersStructure'

export async function getCurrentUser() {
    const token = Cookies.get('token')
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/json" },
        { key: "Authorization", value: `Bearer ${token}` }
    ])
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, { method: "GET", headers })
    const result = await response.json()
    if(result.status == 'failed') return false
    return result.user
}
