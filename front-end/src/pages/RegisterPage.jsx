import React, { useState } from 'react'
import { Loading, RegisterForm } from '../components/Components'

export const RegisterPage = () => {
    const [ loading, setLoading ] = useState(false)

    return (
    <>
    {loading === true ? <Loading /> : (
        <RegisterForm setLoading={setLoading} />
    )}
    </>
    )
}
