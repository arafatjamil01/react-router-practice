import React from 'react';

const SingleMeal = ({meal}) => {

    return (
        <div>
            <div className="max-w-4xl mx-auto p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="rounded-lg shadow-lg mx-auto mb-4 w-[400px]"
                    />
                    <p className="text-gray-600 italic">
                        {meal.strCategory} - {meal.strArea}
                    </p>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                    <ul className="list-disc list-inside">
                        {Array.from({ length: 20 }, (_, i) => {
                            const ingredient = meal[`strIngredient${i + 1}`];
                            const measure = meal[`strMeasure${i + 1}`];
                            return (
                                ingredient && (
                                    <li key={i} className="text-gray-700">
                                        {measure} {ingredient}
                                    </li>
                                )
                            );
                        })}
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                    <p className="text-gray-700 leading-relaxed">
                        {meal.strInstructions}
                    </p>
                </div>
                {meal.strYoutube && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">
                            Video Tutorial
                        </h3>
                        <a
                            href={meal.strYoutube}
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

export default SingleMeal;