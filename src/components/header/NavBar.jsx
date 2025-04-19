import React from "react";
import { Link } from "react-router";

const NavBar = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <div className="text-white text-lg font-bold">React Router</div>
                <ul className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-400">
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white hover:text-gray-400"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white hover:text-gray-400"
                    >
                        Contact
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
