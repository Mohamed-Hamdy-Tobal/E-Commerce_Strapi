"use client"

import useProductById from '@/utils/useProductById';
import React from 'react'
import LoadingSpinner from '../../Loading/LoadingSpinner';
import { BreadCrump } from '@/components/ui/BreadCrump';
import { ProductBanner } from './ProductBanner';
import { ProductInfo } from './ProductInfo';
import { ProductFilterCategories } from './ProductFilterCategories';

const ProductDetailsSection = ({ productId }) => {

    const { product, loading, error } = useProductById(productId);

    console.log('product', product)

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error in product</div>;

    return (
        <div className='py-10'>
            <BreadCrump />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                <ProductBanner banner={product.attributes.banner.data.attributes.url} />
                <ProductInfo
                    key={product.id}
                    title={product?.attributes?.title}
                    category={product?.attributes?.Category}
                    description={product?.attributes?.description[0]?.children[0]?.text}
                    isInstanceDelivery={product?.attributes?.isInstanceDelivery}
                    price={product?.attributes?.price}
                    whatIncluded={product?.attributes?.whatIncluded}
                />
            </div>
            <ProductFilterCategories category={product?.attributes?.Category}/>
        </div>
    )
}
export default ProductDetailsSection