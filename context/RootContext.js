"use client"

import React, { useState, useEffect } from 'react';
import { CartProvider } from './components/CartProvider';
import useCartProducts from '@/utils/useCartProducts';
import { useUser } from '@clerk/nextjs';

const RootContext = ({ children }) => {
  const user  = useUser();
  const userEmail = user?.user?.primaryEmailAddress?.emailAddress;

  const { products_cart } = useCartProducts(userEmail);

  console.log("products_cart:",products_cart)

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products_cart && user?.isSignedIn) {
      setCart((prevCart) => {
        const newCart = products_cart?.map(product => ({
          id: product.id,
          product: {...product.attributes.products.data[0].attributes, id:product.attributes.products.data[0].id},
        }));

        return [...prevCart, ...newCart];
      });
    }
  }, [products_cart]);

  return (
    <CartProvider.Provider value={{ cart, setCart }}>
      {children}
    </CartProvider.Provider>
  );
};

export default RootContext;
