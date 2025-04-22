import React from 'react';
import { NavLink } from 'react-router';

const MealLanding = () => {
    return (
        <>
            <h1>MealLanding</h1>
            <NavLink
                to="/canadian_meals"
                className="no-underline p-4 border border-gray-300 rounded-lg text-center bg-gray-100 block mb-2"
            >
                Canadian Meals
            </NavLink>
            <NavLink
                to="/single_random_meal"
                className="no-underline p-4 border border-gray-300 rounded-lg text-center bg-gray-100 block mb-2"
            >
                Single Random Meal
            </NavLink>
            <NavLink
                to="/meal_categories"
                className="no-underline p-4 border border-gray-300 rounded-lg text-center bg-gray-100 block mb-2"
            >
                Meal Categories
            </NavLink>
        </>
    );
};

export default MealLanding;
