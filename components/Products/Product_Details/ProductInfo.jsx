import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import React from 'react'

export const ProductInfo = ({
    title,
    category,
    description,
    isInstanceDelivery,
    price,
    whatIncluded,
}) => {
    return (
        <div className=''>
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
            <button className="main-btn mt-3">
                <ShoppingCart /> <span>Add To Cart</span>
            </button>
        </div>
    )
}
