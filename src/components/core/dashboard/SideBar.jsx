import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sm:min-h-screen flex-col sticky sm:col-span-3 col-span-12 w-full h-[100px]  bg-emerald-700 text-white flex items-center sm:flex-col">
      {/* Sidebar Header */}
      <div className="py-4 px-2 text-center text-2xl font-bold sm:border-b border-emerald-600">
        Dashboard
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-10 justify-center sm:flex-col sm:gap-4 sm:px-1 sm:py-6">
        <NavLink
          to="/dashboard/my-profile"
          className={({ isActive }) =>
            `py-2 px-10 rounded-md text-sm text-center sm:text-lg font-medium ${
              isActive ? 'bg-emerald-500' : 'hover:bg-emerald-600'
            }`
          }
        >
          My Profile
        </NavLink>
        <NavLink
          to="/dashboard/setting"
          className={({ isActive }) =>
            `py-2 px-10 rounded-md text-sm text-center sm:text-lg font-medium ${
              isActive ? 'bg-emerald-500' : 'hover:bg-emerald-600'
            }`
          }
        >
          Setting
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;

