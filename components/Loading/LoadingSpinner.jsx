const LoadingSpinner = () => (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div className="loader animate-spin ease-linear rounded-full border-8 border-t-8 border-gray-200 border-t-primary h-16 w-16"></div>
    </div>
);

export default LoadingSpinner;