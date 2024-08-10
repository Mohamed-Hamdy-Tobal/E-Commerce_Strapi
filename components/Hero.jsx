import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-64px)] lg:items-center">
            <div className="mx-auto max-w-xl text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    All Your Digital Products
                    <strong className="font-extrabold text-primary sm:block">
                        Is Onc Click Away.
                    </strong>
                </h1>

                <p className="mt-4 sm:text-xl/relaxed">
                    Start Exploring State of the Art Assets Now!
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        className="block w-full rounded bg-primary/90 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary/85 sm:w-auto"
                        href="/"
                    >
                        Get Started
                    </Link>

                    <Link
                        className="block w-full rounded px-12 py-3 text-sm font-medium text-primary/bg-primary/90 shadow hover:text-primary focus:outline-none focus:ring active:text-primary/active:bg-primary/85 sm:w-auto"
                        href="/"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
