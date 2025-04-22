import React from 'react';
import { useLoaderData } from 'react-router';
import SingleMeal from './SingleMeal';

const SingleCanadianMeal = () => {
    let receivedMeals = useLoaderData();
    const meal = receivedMeals.meals[0];

    return (
        <SingleMeal meal={meal}></SingleMeal>
    );
};

export default SingleCanadianMeal;