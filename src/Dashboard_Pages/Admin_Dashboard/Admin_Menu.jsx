import React from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Admin_Menu = () => {
  return (
    <div className="w-70 md:w-80 primary_bg_color  min-h-screen  shadow-lg p-4">
      <ul className="bg-base-200 shadow-sm rounded-xl min-h-full w-full md:w-60 lg:w-72 p-4 space-y-2 h-1/2 text-base-content">

      <li className="text-xl text-center font-bold primary_text_color mb-6">Admin Panel</li>
  

        {/*------------------ All Users */}
        <li>
          <NavLink
            to="/dashboard/admin"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md transition ${
                isActive ? 'primary_bg_color text-white' : 'text-gray-700 hover:bg-blue-100'
              }`
            }
          >
            <FaUsers className="text-lg" />
             All Users
          </NavLink>
        </li>


        
        {/*  ------------------- all percels*/}
        <li>
          <NavLink
            to="/dashboard/all-percels"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md transition ${
                isActive ? 'primary_bg_color text-white' : 'text-gray-700 hover:bg-blue-100'
              }`
            }
          >
            <FaUsers className="text-lg" />
             All Percels
          </NavLink>
        </li>

                  <div className="divider"></div>

                        {/* Home */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md transition ${
                isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-indigo-100'
              }`
            }
          >
            <FaHome className="text-lg" />
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Admin_Menu;
