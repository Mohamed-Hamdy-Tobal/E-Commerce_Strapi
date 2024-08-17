"use client"

import { useEffect } from "react";

const LoadingSpinner = ({ full }) => {

    useEffect(() => {
        document.documentElement.classList.add('overflow-hidden');
        return () => {
            document.documentElement.classList.remove('overflow-hidden');
        };
    }, [])

    return (
        <div className={`fixed bottom-0 ${full ? "bg-opacity-75 h-full" : "h-[calc(100vh-64px)]"} left-0 w-full flex items-center justify-center bg-[#fbfbfb] z-50`}>
            <div className="loader animate-spin ease-linear rounded-full border-8 border-t-8 border-gray-200 border-t-primary h-16 w-16"></div>
        </div>
    )

}

export default LoadingSpinner;