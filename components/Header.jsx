'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ShoppingCart } from 'lucide-react'
import { CartProvider } from '@/context/components/CartProvider'
import { Cart } from './Cart/Cart'

const Header = () => {

    const user = useUser()
    // console.log("User:", user)

    const pathname = usePathname()

    // Check if the current route is sign-in or sign-up
    if ((pathname === '/sign-in' || pathname === '/sign-up') && !user.isSignedIn) {
        return null
    }

    const {cart, setCart} = useContext(CartProvider)

    const [openCart, setOpenCart] = useState(false)

    console.log('cart:',cart)

    // Close the cart when the pathname changes
    useEffect(() => {
        setOpenCart(false)
    }, [pathname])

    return (
        <header className="bg-white shadow-sm">
            <div className="container">
                <div className="flex h-16 max-w-screen-xl items-center gap-8">
                    <Link className="block text-primary" href="/">
                        <span className="sr-only">Home</span>
                        <Image src={'/icons/icon.svg'} width={50} height={50} />
                    </Link>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4 relative">
                            {user.isSignedIn ? (
                                <div className='flex items-center gap-5'>
                                    <span className='flex items-center gap-1 cursor-pointer' onClick={() => {setOpenCart((prev) => !prev)}}>
                                        <ShoppingCart/> <span>({cart.length})</span>
                                    </span>
                                    <UserButton afterSignOutUrl='/'/>
                                    {openCart && <Cart setOpenCart={setOpenCart}/>}
                                </div>
                            ) : (
                                <div className="sm:flex sm:gap-4">
                                    <Link
                                        className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#07ccc9]"
                                        href="/sign-in"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary/75 sm:block"
                                        href="/sign-up"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
