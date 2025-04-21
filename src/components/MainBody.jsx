import React from 'react';
import { Outlet } from 'react-router';

const MainBody = () => {
    return (
        <div className='min-h-[400px] w-9/12 bg-slate-200 p-6'>
            <Outlet />
        </div>
    );
};

export default MainBody;