import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <div className="text-white text-lg font-bold">React Router</div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
                    <li><a href="/about" className="text-white hover:text-gray-400">About</a></li>
                    <li><a href="/features" className="text-white hover:text-gray-400">Features</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;