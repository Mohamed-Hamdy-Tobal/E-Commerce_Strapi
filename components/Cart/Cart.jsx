import { CartProvider } from '@/context/components/CartProvider'
import Image from 'next/image'
import React, { useContext } from 'react'
import { EmptyCart } from './EmptyCart'
import Link from 'next/link'

export const Cart = ({setOpenCart}) => {

    const { cart, setCart } = useContext(CartProvider)

    return (
        <div
            className="h-[300px] w-[250px] sm:w-[355px] bg-white p-3 z-10 rounded-md border shadow-sm absolute right-10 top-12 overflow-auto"
            aria-modal="true"
            role="dialog"
            tabIndex="-1"
        >
            <button onClick={() => {setOpenCart(false)}} className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
                <span className="sr-only">Close cart</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {cart?.length > 0 ? (
                <div className="mt-[45px] space-y-6">
                    <ul className="space-y-6">
                        {cart?.map((item, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <Image
                                    src={item.product.banner.data.attributes.url}
                                    width={400}
                                    height={400}
                                    alt="product"
                                    className="size-16 rounded object-cover"
                                />

                                <div className="flex flex-col sm:flex-row gap-3 justify-start items-start">
                                    <div>
                                        <h3 className="text-sm text-gray-900 sm:line-clamp-2">{item.product.title}</h3>

                                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                            <div>
                                                <dt className="inline">Category:</dt>
                                                <dd className="inline">{item.product.Category}</dd>
                                            </div>

                                            <div>
                                                <dt className="inline">Size:</dt>
                                                <dd className="inline">{item.product.price}</dd>
                                            </div>
                                        </dl>
                                    </div>

                                    <div className="flex flex-1 items-center justify-end gap-2">
                                        <form>
                                            <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                                            <input
                                                type="number"
                                                min="1"
                                                value="1"
                                                id="Line1Qty"
                                                className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            />
                                        </form>

                                        <button className="text-gray-600 transition hover:text-red-600">
                                            <span className="sr-only">Remove item</span>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}

                    </ul>

                    <div className="space-y-4 text-center">
                        <Link
                            href={'/cart'}
                            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                        >
                            View my cart ({cart?.length})
                        </Link>

                        {/* <a
                            href="#"
                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                        >
                            Checkout
                        </a> */}

                        <button
                            onClick={() => {setOpenCart(false)}}
                            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                        >
                            Continue shopping
                        </button>
                    </div>
                </div>
            ) : <EmptyCart />}

        </div>
    )
}
