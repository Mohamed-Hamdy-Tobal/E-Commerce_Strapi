import { AuthForm } from '@/components/Auth/AuthForm'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <AuthForm>
            <SignIn />
        </AuthForm>
    )
}

export default page