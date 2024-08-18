import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import api from '@/lib/api'

export const useCart = () => {
    const { user } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleClose = () => {
        setIsError(false)
        setIsSuccess(false)
    }

    const addToCart = async (productId) => {
        setIsLoading(true)

        const formData = {
            data: {
                username: user.fullName,
                email: user.primaryEmailAddress.emailAddress,
                products: [productId]
            }
        }

        console.log("formData:", formData)

        try {
            const response = await api.post('/api/carts', formData)
            console.log("Response cart:", response)
            setIsSuccess(true)
            return response.data
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error('Failed to add to cart', error)
            return Promise.reject(error)
        } finally {
            setIsLoading(false)
        }
    }

    return { addToCart, handleClose, isLoading, isSuccess, isError }
}
