import api from '@/lib/api';
import { useState, useEffect } from 'react';

const useCartProducts = (email) => {

    // console.log("email:", email)

    const [products_cart, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // const response = await api.get(`/api/carts`);
                const response = await api.get(`/api/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`);
                console.log("response:",response)
                setProduct(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (email) {
            fetchProduct();
        }
    }, [email]);

    return { products_cart, loading, error };
};

export default useCartProducts;
