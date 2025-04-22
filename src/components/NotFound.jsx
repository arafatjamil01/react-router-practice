import React from 'react';
import Header from './Header';
import Footer from './Footer';

const NotFound = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">404 Not Found</h1>
                <p className="text-lg text-gray-700 mb-6">Sorry, the page you are looking for does not exist.</p>
                <button 
                    onClick={() => window.location.href = '/'} 
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Go Back Home
                </button>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;