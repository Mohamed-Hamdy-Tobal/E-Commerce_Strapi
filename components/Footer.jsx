"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const Footer = () => {

    const pathname = usePathname()

    // Check if the current route is sign-in or sign-up
    if (pathname === '/sign-in' || pathname === '/sign-up') {
        return null
    }

    return (
        <footer>
            Footer
        </footer>
    )
}

export default Footer
