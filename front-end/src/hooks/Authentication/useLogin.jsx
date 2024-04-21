import { createBodyStructure, createHeadersStructure } from "../../functions/Functions"

export async function useLogin(email, password){
    const headers = createHeadersStructure([
        { key: "Accept", value: "application/json" },
    ])
    const body = createBodyStructure([
        { key: "email", value: email },
        { key: "password", value: password }
    ])

    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, { method: "POST", headers, body})
        const result = await response.json()
        return result
    }catch(error){
        return { status: "failed", message: error }
    }
}
