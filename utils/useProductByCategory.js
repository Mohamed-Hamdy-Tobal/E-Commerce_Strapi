import api from '@/lib/api';
import { useState, useEffect } from 'react';

const useProductByCategory = (category) => {

    console.log("category:", category)

    const [products_category, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/api/products?filters[Category][$eq]=${category}&populate=*`);
                setProduct(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (category) {
            fetchProduct();
        }
    }, [category]);

    return { products_category, loading, error };
};

export default useProductByCategory;
