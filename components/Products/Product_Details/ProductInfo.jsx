"use client"

import { ErrorAlert } from '@/components/ui/ErrorAlert'
import { SuccessAlert } from '@/components/ui/SuccessAlert'
import { useCart } from '@/utils/useCart'
import { useUser } from '@clerk/nextjs'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ProductInfo = ({
    id,
    title,
    category,
    description,
    isInstanceDelivery,
    price,
    whatIncluded,
}) => {

    const user = useUser()
    const router = useRouter()

    const { addToCart, isLoading, isError, isSuccess, handleClose } = useCart()

    const handleAddToCart = async () => {
        if (!user.isSignedIn) {
            router.push("/sign-in")
        } else {
            console.log("Add to cart: ", id)
            try {
                await addToCart(id)
                console.log("Product added to cart")
            } catch (error) {
                console.error("Failed to add product to cart", error)
            }
        }
    }

    return (
        <div className=''>
            {isSuccess && (
                <SuccessAlert 
                    title="Success!" 
                    message="Product added to cart successfully!" 
                    onClose={handleClose} 
                />
            )}
            {isError && (
                <ErrorAlert
                    message="Product not added to cart!" 
                    onClose={handleClose} 
                />
            )}
            <h1 className='text-[25px] font-bold'>{title}</h1>
            <h2 className='text-[15px] text-gray-400'>{category}</h2>
            <p className='text-[15px] text-[#333] pt-5'>{description}</p>
            <div className={`text-sm mb-4 text-gray-400 flex justify-start items-center gap-2 mt-3`}>
                {isInstanceDelivery ? (
                    <>
                        <BadgeCheck className='text-green-600' />
                        <span>Instant Delivery Available</span>
                    </>
                ) : (
                    <>
                        <AlertOctagon className='text-red-600' />
                        <span>Delivery Not Instant</span>
                    </>
                )}
            </div>
            <p className="text-[32px] font-semibold text-primary mt-3">${price}</p>
            <button disabled={isLoading} onClick={handleAddToCart} className="main-btn mt-3 disabled:cursor-not-allowed disabled:bg-primary/40">
                <ShoppingCart /> <span>Add To Cart</span>
            </button>
        </div>
    )
}
