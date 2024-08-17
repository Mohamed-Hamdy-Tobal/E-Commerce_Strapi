import api from '@/lib/api';
import { useState, useEffect } from 'react';

const useProductById = (productId) => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/api/products/${productId}?populate=*`);
                setProduct(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    return { product, loading, error };
};

export default useProductById;
