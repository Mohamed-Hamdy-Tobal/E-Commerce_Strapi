import React from 'react';
import { ProductItem } from './ProductItem';
import Link from 'next/link';

export const ProductsList = ({ products }) => {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/product-details/${product.id}`}
                    >
                        <ProductItem
                            title={product?.attributes?.title}
                            category={product?.attributes?.Category}
                            price={product?.attributes?.price}
                            banner={product?.attributes?.banner?.data?.attributes?.url}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};
