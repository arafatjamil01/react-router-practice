import React from 'react';
import { useLoaderData } from 'react-router';


const MealCategories = () => {

     let mealCategories = useLoaderData();
     console.log(mealCategories.categories); // Check the data structure in the console
     
    return (
        <div>
            <h1>Meal Categories</h1>
            <div className='grid grid-cols-3 gap-4'>
                {mealCategories.categories.map((category) => (
                    <div className='bg-white shadow-sm p-4 rounded' key={category.idCategory}>
                        <h2 className='text-xl mb-4 font-bold text-center'>{category.strCategory}</h2>
                        <img className='rounded-xl' src={category.strCategoryThumb} alt={category.strCategory} />
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealCategories;