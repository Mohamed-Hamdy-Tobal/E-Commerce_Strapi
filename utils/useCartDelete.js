"use client"
import { useContext, useState } from 'react'
import api from '@/lib/api'
import { CartProvider } from '@/context/components/CartProvider'

export const useCartDelete = () => {

    const { cart, setCart } = useContext(CartProvider)

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleClose = () => {
        setIsError(false)
        setIsSuccess(false)
    }

    const deleteFromCart = async (productId) => {

        console.log("ID From DELETE HANDLER: ", productId)
        
        setIsLoading(true)

        try {
            const response = await api.delete(`/api/carts/${productId}`)
            console.log("Response deleteFromCart:", response)
            setIsSuccess(true)

            if (response) {
                setCart((oldCart) => oldCart.filter(item=> item.id !== productId))
            }

            console.log("cart after delete:", cart)

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

    return { deleteFromCart, handleClose, isLoading, isSuccess, isError }
}
