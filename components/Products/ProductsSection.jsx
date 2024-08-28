"use client";

import useProducts from '@/utils/useProducts';
import React, { useEffect, useState } from 'react';
import { ProductsList } from './ProductsList'
import LoadingSpinner from '../Loading/LoadingSpinner';
import { Filtration } from './Filtration';

const ProductsSection = () => {

    const { products, loading, error } = useProducts();

    // console.log('products', products)
    
    const [mainProducts, setProducts] = useState([])
    console.log('mainProducts ProductsSection', mainProducts)

    useEffect(() => {
        if (products) {
            setProducts(products)
        }
    }, [products])

    if (loading) return <LoadingSpinner full/>;
    if (error) return <div>Error in products</div>;

    return (
        <div className='py-10'>
            <div className="flex justify-between items-center mt-4 mb-8">
                <Filtration products={products} setProducts={setProducts}/>
            </div>
            <ProductsList products={mainProducts} />
        </div>
    )
}

export default ProductsSection
