import useProductByCategory from '@/utils/useProductByCategory';
import React from 'react'
import { ProductsList } from '../ProductsList';

export const ProductFilterCategories = ({ category }) => {

    // console.log("category:", category)

    const { products_category } = useProductByCategory(category);

    // console.log('products_category', products_category)

    return (
        products_category?.length > 0 && (
            <>
                <div className='mt-24'>
                    <h2 className='text-xl mb-6'>Similar Products</h2>
                    <ProductsList products={products_category} />
                </div>
            </>
        )
    )
}
