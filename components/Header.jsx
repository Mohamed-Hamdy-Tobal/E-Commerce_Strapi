'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { ShoppingCart } from 'lucide-react'
import { CartProvider } from '@/context/components/CartProvider'

const Header = () => {

    const user = useUser()
    // console.log("User:", user)

    const pathname = usePathname()

    // Check if the current route is sign-in or sign-up
    if ((pathname === '/sign-in' || pathname === '/sign-up') && !user.isSignedIn) {
        return null
    }

    const {cart, setCart} = useContext(CartProvider)

    console.log('cart:',cart)

    return (
        <header className="bg-white shadow-sm">
            <div className="container">
                <div className="flex h-16 max-w-screen-xl items-center gap-8">
                    <a className="block text-primary" href="#">
                        <span className="sr-only">Home</span>
                        <Image src={'/icons/icon.svg'} width={50} height={50} />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Explore </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> About Us</Link>
                                </li>

                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Contact us </Link>
                                </li>

                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            {user.isSignedIn ? (
                                <div className='flex items-center gap-5'>
                                    <Link href={'/cart'} className='flex items-center gap-1'>
                                        <ShoppingCart/> <span>({cart.length})</span>
                                    </Link>
                                    <UserButton afterSignOutUrl='/'/>
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

                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
