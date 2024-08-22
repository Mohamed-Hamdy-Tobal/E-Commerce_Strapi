"use client"
import { CartProvider } from '@/context/components/CartProvider'
import React, { useContext } from 'react'
import { EmptyCart } from './EmptyCart'
import { CartSectionList } from './CartSectionList'
import { useRouter } from 'next/navigation'

export const CartSectionPage = () => {

    const router = useRouter()

    const { cart } = useContext(CartProvider)

    // Calculate the total number of items in the cart
    const totalPrice = cart?.reduce((total, item) => total + item?.product?.price, 0).toFixed(2);

    const handleCheckout = () => {
        console.log("CHECK OUT!", totalPrice)
        router.push("/checkout")
        localStorage.setItem("totalPrice",totalPrice)
    }

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

                {cart?.length > 0 ? (
                    <div className="mx-auto max-w-3xl">
                        <header className="text-center">
                            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                        </header>

                        <div className="mt-8">
                            <CartSectionList cart={cart} />

                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-6">
                                    <dl className="space-y-0.5 text-sm text-gray-700">

                                        <div className="flex justify-between !text-base font-medium">
                                            <dt>Total</dt>
                                            <dd>£{totalPrice}</dd>
                                        </div>
                                    </dl>

                                    <div className="flex justify-end">
                                        <button
                                            onClick={handleCheckout}
                                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* <h1 className='text-gray-400 text-[14px] mt-5'>Note: All items will be send via Email</h1> */}
                            <span className="relative flex justify-center mt-6">
                                <div
                                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                                ></div>

                                <span className="relative z-10 bg-white px-6">Note: All items will be send via Email</span>
                            </span>
                        </div>
                    </div>
                ) : <EmptyCart page />}

            </div>
        </section>
    )
}
