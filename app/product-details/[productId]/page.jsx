import ProductDetailsSection from '@/components/Products/Product_Details/ProductDetails'
import React from 'react'

const ProductDetails = ({ params }) => {

    console.log("Params: ", params?.productId)

    return (
        <div className='product-details-page'>
            <div
                className="container"
            >
                <ProductDetailsSection productId={params?.productId} />
            </div>
        </div>
    )
}
export default ProductDetails