import React from 'react';
import { useLoaderData } from 'react-router';

const SingleRandomMeal = () => {
    let singleRandomMeals = useLoaderData();
    console.log(singleRandomMeals.meals); // Check the data structure in the console
    

    return (
        <div>
            <h1>Single random real</h1>
            <div className="max-w-4xl mx-auto p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">{singleRandomMeals.meals[0].strMeal}</h2>
                    <img
                        src={singleRandomMeals.meals[0].strMealThumb}
                        alt={singleRandomMeals.meals[0].strMeal}
                        className="rounded-lg shadow-lg mx-auto mb-4 w-[400px]"
                    />
                    <p className="text-gray-600 italic">{singleRandomMeals.meals[0].strCategory} - {singleRandomMeals.meals[0].strArea}</p>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                    <ul className="list-disc list-inside">
                        {Array.from({ length: 20 }, (_, i) => {
                            const ingredient = singleRandomMeals.meals[0][`strIngredient${i + 1}`];
                            const measure = singleRandomMeals.meals[0][`strMeasure${i + 1}`];
                            return ingredient && (
                                <li key={i} className="text-gray-700">
                                    {measure} {ingredient}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                    <p className="text-gray-700 leading-relaxed">{singleRandomMeals.meals[0].strInstructions}</p>
                </div>
                {singleRandomMeals.meals[0].strYoutube && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Video Tutorial</h3>
                        <a
                            href={singleRandomMeals.meals[0].strYoutube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Watch on YouTube
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleRandomMeal;