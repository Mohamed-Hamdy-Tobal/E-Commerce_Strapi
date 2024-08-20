import Image from 'next/image'
import React from 'react'

export const EmptyCart = ({page}) => {
    return (
        <div className='cart-empty flex w-full h-full justify-center items-center flex-col gap-4'>
            {page? (
                <div className='py-5 text-center flex w-full h-full justify-center items-center flex-col gap-4'>
                    <Image className='w-[220px] sm:w-[350px]' src={'/imgs/empty_cart_page.png'} width={500} height={500} alt='img'/>
                    <h3 className='text-[30px] font-medium text-[#333]'>Your shopping cart is empty</h3>
                </div>
            ): (
                <div className='text-center flex w-full h-full justify-center items-center flex-col gap-4'>
                    <Image className='w-[220px]' src={'/imgs/empty_cart.png'} width={500} height={500} alt='img'/>
                    <h3 className='text-[14px] font-medium text-[#333]'>Your shopping cart is empty</h3>
                </div>
            )}
        </div>
    )
}
