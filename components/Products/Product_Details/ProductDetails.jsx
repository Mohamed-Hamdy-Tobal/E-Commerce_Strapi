"use client"

import useProductById from '@/utils/useProductById';
import React from 'react'
import LoadingSpinner from '../../Loading/LoadingSpinner';
import { BreadCrump } from '@/components/ui/BreadCrump';
import { ProductBanner } from './ProductBanner';
import { ProductInfo } from './ProductInfo';
import { ProductFilterCategories } from './ProductFilterCategories';
import { FaCheckCircle } from 'react-icons/fa';


const ProductDetailsSection = ({ productId }) => {

    const { product, loading, error } = useProductById(productId);


    const whatIncludedPro = product?.attributes?.whatIncluded
    console.log('whatIncluded', whatIncludedPro)

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error in product</div>;

    return (
        <div className='py-10'>
            <BreadCrump productID={product?.id} />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                <ProductBanner banner={product.attributes.banner.data.attributes.url} />
                <ProductInfo
                    key={product.id}
                    id={product?.id}
                    title={product?.attributes?.title}
                    category={product?.attributes?.Category}
                    description={product?.attributes?.description[0]?.children[0]?.text}
                    isInstanceDelivery={product?.attributes?.isInstanceDelivery}
                    price={product?.attributes?.price}
                    whatIncluded={product?.attributes?.whatIncluded}
                />
            </div>

            {whatIncludedPro && <div className='flex flex-col gap-3 mb-3 mt-[50px]'>
                {
                    whatIncludedPro.map((item, idx) => (
                        <span key={idx} className='text-[20px] text-[#777] flex items-center gap-2'>
                            <FaCheckCircle className='text-green-500' />
                            {item.children[0].text}
                        </span>
                    ))
                }
            </div>}

            <ProductFilterCategories category={product?.attributes?.Category} />
        </div>
    )
}
export default ProductDetailsSection