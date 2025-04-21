import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Sidebar = () => {
    let navigate = useNavigate();

    return (
        <div className="bg-slate-300 p-6 w-3/12">
            <h3 className="leading-3 font-bold text-center mb-4">Sidebar</h3>
            <p className="mb-4 text-center">
                This is Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sunt molestiae eaque quo id.
            </p>

            <ul id="sidebar-links">
                <li className="mb-2">
                    <NavLink to="/canadian_meals">Canadian Meals</NavLink>
                </li>
                <li className="mb-2">
                    <NavLink to="/single_random_meal">
                        Single Random Meal
                    </NavLink>
                </li>
                <li className="mb-2">
                    <NavLink to="/meal_categories">Meal Categories</NavLink>
                </li>

                <button className='border-b-2 border-blue-400' onClick={() => navigate(-1)}>Go Back To Previous One</button>
            </ul>
        </div>
    );
};

export default Sidebar;