import React from "react";
import { useLoaderData } from "react-router";

const CanadianMeals = () => {
    const canadianMeals = useLoaderData();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Canadian Meals</h1>
            <div className="meal-list grid grid-cols-3 gap-12">
                {canadianMeals.meals.map((meal) => (
                    <div key={meal.idMeal} className="meal-item w-full text-center">
                        <img className="rounded-full w-[200px] m-auto" src={meal.strMealThumb} alt={meal.strMeal} />
                        <h2 className="text-center font-bold mt-4 text-xl">{meal.strMeal}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CanadianMeals;
