"use client"
import { useContext, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import api from '@/lib/api'
import { CartProvider } from '@/context/components/CartProvider'

export const useCart = ({ product }) => {

    const { cart, setCart } = useContext(CartProvider)

    const { user } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)

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

        // console.log("formData:", formData)

        try {
            const response = await api.post('/api/carts', formData)
            // console.log("Response cart:", response)
            setData(response.data.data)
            setIsSuccess(true)

            // Fetch the product details based on the response ID
            try {

                const productResponse = await api.get(`/api/carts/${response.data.data.id}?populate[products][populate]=banner&filters[email][$eq]=${response.data.data.attributes.email}`)
                const fetchedProduct = productResponse.data.data.attributes.products.data[0].attributes
                console.log("productResponse:", productResponse)
                const myProWithId = {...fetchedProduct, id:productResponse.data.data.attributes.products.data[0].id}
                console.log("fetchedProduct:", myProWithId)


                setCart(oldCart => [
                    ...oldCart,
                    {
                        id: response.data.data.id,
                        product: myProWithId
                    }
                ])

            } catch (err) {
                console.log(err)
                setIsError(true)
                return Promise.reject(err)
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

    return { addToCart, handleClose, isLoading, isSuccess, isError, data }
}
