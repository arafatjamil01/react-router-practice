import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <div>
            <nav id="main_nav" className="bg-gray-800 p-4 flex justify-between items-center">
                <div className="text-white text-lg font-bold">React Router</div>
                <ul className="flex space-x-4">
                    <NavLink to="/" className="text-white hover:text-gray-400">
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="text-white hover:text-gray-400"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="text-white hover:text-gray-400"
                    >
                        Contact
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
