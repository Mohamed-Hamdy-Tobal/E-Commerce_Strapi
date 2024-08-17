import Image from 'next/image'
import React from 'react'

export const ProductBanner = ({banner}) => {
    return (
        <div className=''>
            <Image
                src={banner}
                alt='banner'
                width={400}
                height={400}
                className='rounded-lg w-full'
            />
        </div>
    )
}
