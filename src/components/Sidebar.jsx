import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className="bg-slate-300 p-6 w-3/12">
            <h3 className="leading-3 font-bold text-center mb-4">Sidebar</h3>
            <p className="mb-4 text-center">
                This is Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sunt molestiae eaque quo id.
            </p>

            <ul>
                <li className="mb-2">
                    <Link to="/canadian_meals">Canadian Meals</Link>
                </li>
                <li className="mb-2">
                    <Link to="/single_random_meal">Single Random Meal</Link>
                </li>
                <li className="mb-2">
                    <Link to="/meal_categories">Meal Categories</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;