import React from 'react';


import { Outlet } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // More modern and clean icon
import DashboardSidebar from '../Dashboard_Pages/DashboardSidebar';


const DashboardLayout = () => {
    


    return (
      <div className="drawer md:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
           
  <div className="flex justify-between items-center px-10 py-6 md:hidden">
                <div className="logo">
                      <h1> RouteXpress </h1>
                </div>
  <label htmlFor="my-drawer-2" className="drawer-button text-2xl text-gray-700 hover:text-primary transition-all duration-200 cursor-pointer" >
    <FiMenu />
  </label>
</div>
               

                 <Outlet></Outlet>
  </div>
         


          <DashboardSidebar></DashboardSidebar>
</div>
    );
};

export default DashboardLayout;