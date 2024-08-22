"use client"
import { useContext, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import api from '@/lib/api'
import { CartProvider } from '@/context/components/CartProvider'
import { useCartDelete } from './useCartDelete'

export const useOrders = () => {

    const { cart, setCart } = useContext(CartProvider)

    const { user } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)

    const { deleteFromCart } = useCartDelete()

    const handleClose = () => {
        setIsError(false)
        setIsSuccess(false)
    }

    const addOrder = async (amount) => {

        console.log("MY AMoutn : ", amount)
        setIsLoading(true)
        
        let productId = []
        cart.forEach(element => {
            productId.push(element?.product.id)
        });

        const formData = {
            data: {
                username: user.fullName,
                email: user.primaryEmailAddress.emailAddress,
                amount:amount,
                products: productId
            }
        }

        console.log("formData:", formData)

        try {
            const response = await api.post('/api/orders', formData)
            // console.log("Response cart:", response)
            setData(response.data.data)
            setIsSuccess(true)

            if (response) {
                console.log('GO to Delete ALL!')
                cart.forEach(ele => {
                    deleteFromCart(ele?.id)
                })
            }
            
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

    return { addOrder, handleClose, isLoading, isSuccess, isError, data }
}
