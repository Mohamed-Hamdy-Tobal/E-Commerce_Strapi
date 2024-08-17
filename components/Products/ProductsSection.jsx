"use client";

import useProducts from '@/utils/useProducts';
import React from 'react';
import { ProductsList } from './ProductsList'
import LoadingSpinner from '../Loading/LoadingSpinner';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const ProductsSection = () => {

    const { products, loading, error } = useProducts();

    console.log('products', products)

    if (loading) return <LoadingSpinner full/>;
    if (error) return <div>Error in products</div>;

    return (
        <div className='py-10'>
            <div className="flex justify-between items-center mt-4 mb-8">
                <h1 className='text-xl font-bold'>Brand New</h1>
                <Link href='/' className='text-lg text-primary underline flex gap-1 items-center'>
                    <span>View All Collections</span>
                    <FiArrowRight className="ml-2" />
                </Link>
            </div>
            <ProductsList products={products} />
        </div>
    )
}

export default ProductsSection
