import React, { useState } from 'react'
import { Loading, LoginForm } from '../components/Components'

export const LoginPage = () => {
    const [ loading, setLoading ] = useState(false)
    return (
        <>
        {loading === true ? <Loading /> : (
            <LoginForm setLoading={setLoading} />
        )}
        </>
    )
}
