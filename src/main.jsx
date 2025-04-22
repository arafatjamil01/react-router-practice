import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/Contact.jsx";

import CanadianMeals from "./components/meals/CanadianMeals.jsx";
import MealCategories from "./components/meals/MealCategories.jsx";
import SingleRandomMeal from "./components/meals/SingleRandomMeal.jsx";
import singleCanadianMeal from "./components/meals/singleCanadianMeal.jsx";
import NotFound from "./components/NotFound.jsx";
import MealLanding from "./components/meals/MealLanding.jsx";

let router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: MealLanding },
            {
                path: "/canadian_meals",
                Component: CanadianMeals,
                loader: () =>
                    fetch(
                        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
                    ),
            },
            {
                path: "/canadian_meals/:mealId",
                Component: singleCanadianMeal,
                loader: async ({ params }) => {
                    return fetch(
                        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
                    );
                },
            },
            {
                path: "/meal_categories",
                Component: MealCategories,
                loader: () =>
                    fetch(
                        "https://www.themealdb.com/api/json/v1/1/categories.php"
                    ),
            },
            {
                path: "/single_random_meal",
                Component: SingleRandomMeal,
                loader: () =>
                    fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
            },
        ],
    },
    {
        path: "/about",
        Component: About,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "*",
        Component: NotFound,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
