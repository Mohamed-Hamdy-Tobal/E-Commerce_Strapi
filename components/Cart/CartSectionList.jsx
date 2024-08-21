import { useCartDelete } from '@/utils/useCartDelete'
import Image from 'next/image'
import React, { useContext } from 'react'
import { SuccessAlert } from '../ui/SuccessAlert'
import { ErrorAlert } from '../ui/ErrorAlert'

export const CartSectionList = ({ cart }) => {

    console.log("CartSectionList:", cart)

    const { deleteFromCart, handleClose, isSuccess, isError } = useCartDelete()

    const handleDeleteProduct = (pro_id) => {
        console.log("DELETE PRODUCT!", pro_id)
        deleteFromCart(pro_id)
    }

    return (

        <div className="space-y-6">
            {isSuccess && (
                <SuccessAlert
                    title="Success!"
                    message="Product deleted from cart successfully!"
                    onClose={handleClose}
                />
            )}
            {isError && (
                <ErrorAlert
                    message="Product not deleted from cart!"
                    onClose={handleClose}
                />
            )}
            <ul className="space-y-6">
                {cart?.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                        <Image
                            src={item?.product?.banner?.data?.attributes?.url}
                            width={400}
                            height={400}
                            alt="product"
                            className="size-16 rounded object-cover"
                        />

                        <div className="flex w-full flex-col sm:flex-row gap-3 justify-start items-center">
                            <div>
                                <h3 className="text-sm text-gray-900 sm:line-clamp-2">{item?.product.title}</h3>

                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt className="inline">Category : </dt>
                                        <dd className="inline">{item?.product.Category}</dd>
                                    </div>

                                </dl>
                            </div>

                            <div className="flex flex-1 items-center justify-end gap-2">
                                <span className='text-[#555] font-medium text-[18px]'>{item?.product.price}</span>

                                <button onClick={() => { handleDeleteProduct(item.id) }} className="text-gray-600 transition hover:text-red-600 disabled:text-gray-200">
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
        </div>
    )
}
