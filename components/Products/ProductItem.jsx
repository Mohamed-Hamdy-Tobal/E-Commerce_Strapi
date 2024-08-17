import { List } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import './style/product.css'

export const ProductItem = ({
    title,
    category,
    price,
    banner
}) => {
    return (
        <div className="bg-gray-50 rounded-lg overflow-hidden transition-all shadow-lg product-item">
            {banner && <Image src={banner} alt={title} width={400} height={350} className="w-full h-48 object-cover mb-2 transition-all pro-image" />}
            <div className="flex justify-between items-center gap-3 p-3">
                <div>
                    <h2 className="text-xl font-bold mb-2 line-clamp-1">{title}</h2>
                    <div className="text-sm text-gray-600 mb-2 flex justify-start items-center gap-2">
                        <List className='h-4 w-4' />
                        <span>{category}</span>
                    </div>
                </div>
                <p className="text-lg font-semibold text-green-500 mb-2">${price}</p>
            </div>
        </div>
    );
}
