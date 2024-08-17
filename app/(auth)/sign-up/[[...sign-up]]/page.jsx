import { AuthForm } from '@/components/Auth/AuthForm'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <AuthForm>
            <SignUp />
        </AuthForm>
    )
}

export default page