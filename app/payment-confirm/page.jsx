import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="grid place-content-center bg-white px-4 py-10">
            <div className="text-center">
                <Image src={'/imgs/mail-send.png'} width={640} height={530} alt='img'/>

                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Payment Successful!</p>

                <p className="mt-4 text-gray-500">We send an email order confirmation along with Digital Content</p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary/85 focus:outline-none focus:ring"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default page