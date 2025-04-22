import React from 'react';
import { useLoaderData } from 'react-router';
import SingleMeal from './SingleMeal';

const SingleRandomMeal = () => {
    let singleRandomMeals = useLoaderData();    
    const meal = singleRandomMeals.meals[0];

    return (
       <SingleMeal meal={meal}></SingleMeal>
    );
};

export default SingleRandomMeal;