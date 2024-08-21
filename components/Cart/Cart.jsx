import { CartProvider } from '@/context/components/CartProvider'
import Image from 'next/image'
import React, { useContext } from 'react'
import { EmptyCart } from './EmptyCart'
import Link from 'next/link'

export const Cart = ({ setOpenCart }) => {

    const { cart } = useContext(CartProvider)

    // Group products by their id and sum up quantities
    const groupedCart = cart.reduce((acc, item) => {
        const productId = item.product.id;

        if (!acc[productId]) {
            acc[productId] = {
                product: item.product,
                quantity: 0,
                cartItemIds: []  // Array to store the root ids
            };
        }

        acc[productId].quantity += 1;
        acc[productId].cartItemIds.push(item.id);  // Store the root id

        return acc;
    }, {});

    // Convert the grouped cart into an array
    const finalCart = Object.values(groupedCart);

    console.log('finalCart:', finalCart);



    // Calculate the total number of items in the cart
    const totalItems = finalCart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div
            className="h-[300px] w-[250px] sm:w-[355px] bg-white p-3 z-10 rounded-md border shadow-sm absolute right-10 top-12 overflow-auto"
            aria-modal="true"
            role="dialog"
            tabIndex="-1"
        >
            <button onClick={() => { setOpenCart(false) }} className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
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

            {finalCart.length > 0 ? (
                <div className="mt-[45px] space-y-6 flex flex-col justify-between min-h-[220px]">
                    <ul className="space-y-6">
                        {finalCart.map((item, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <Image
                                    src={item.product?.banner?.data?.attributes?.url}
                                    width={400}
                                    height={400}
                                    alt="product"
                                    className="size-16 rounded object-cover"
                                />

                                <div className="flex flex-col sm:flex-row gap-3 justify-start items-start w-full">
                                    <div>
                                        <h3 className="text-sm text-gray-900 sm:line-clamp-2">{item.product.title}</h3>

                                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                            <div>
                                                <dt className="inline">Category:</dt>
                                                <dd className="inline">{item.product?.Category}</dd>
                                            </div>

                                            <div>
                                                <dt className="inline">Price:</dt>
                                                <dd className="inline">{item.product?.price}</dd>
                                            </div>
                                        </dl>
                                    </div>

                                    <div className="flex flex-1 items-center justify-end gap-2">
                                        <form>
                                            <label htmlFor={`Line1Qty-${index}`} className="sr-only"> Quantity </label>

                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                id={`Line1Qty-${index}`}
                                                className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                                readOnly
                                            />
                                        </form>

                                    </div>
                                </div>
                            </li>
                        ))}

                    </ul>

                    <div className="text-center space-y-4">
                        <Link
                            href={'/cart'}
                            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                        >
                            View my cart ({totalItems})
                        </Link>

                        <button
                            onClick={() => { setOpenCart(false) }}
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
