import React from 'react';
import { Outlet } from 'react-router';

const MainBody = () => {
    return (
        <div className='h-[400px] w-9/12 bg-slate-200 p-6'>
            Main Body
            <Outlet />
        </div>
    );
};

export default MainBody;