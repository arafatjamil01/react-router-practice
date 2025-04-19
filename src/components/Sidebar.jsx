import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-slate-300 p-6 w-3/12">
            <h3 className="leading-3 font-bold text-center mb-4">Sidebar</h3>
            <p className="mb-4 text-center">
                This is Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sunt molestiae eaque quo id.
            </p>
            <ul>
                <li>
                    <a href="#">Canadian Meals</a>
                    {/* https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian */}
                </li>
                <li>
                    <a href="#">Single Random Meal</a>
                    {/* https://www.themealdb.com/api/json/v1/1/random.php */}
                </li>
                <li>
                    <a href="#">Meal Categories</a>
                    {/* https://www.themealdb.com/api/json/v1/1/categories.php */}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;