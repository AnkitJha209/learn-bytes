import React, { useEffect, useState } from 'react'
import { Menu, X, Lightbulb } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { apiConnector } from '../../services/apiConnnector';
import { courseEndpoints } from '../../services/api';
import { FaCartShopping } from "react-icons/fa6";
import { logout } from '../../services/operations/authAPI';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // const [subLinks, setSubLinks] = useState([]);

    // const fetchLinks = async () => {
    //   try {
    //     const result = await apiConnector("GET", courseEndpoints.GET_ALL_COURSE_API);
    //     console.log(result);
    //     setSubLinks(result.data.allCategory);
    //   } catch (err) {
    //     console.log("Could not get category list");
    //   }
    // };
    // useEffect(() => {
    //   fetchLinks();
    // }, []);
  return (
    <nav className="bg-teal-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <NavLink to='' className="flex items-center space-x-2">
            <Lightbulb className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold">LearnBytes</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5">
            <NavLink className={({isActive})=> `${isActive ? 'text-emerald-500' : 'text-white'} hover:text-emerald-400 transition-colors`} to="/">Home</NavLink>
            <NavLink className={({isActive})=> `${isActive ? 'text-emerald-500' : 'text-white'} hover:text-emerald-400 transition-colors`} to="courses" >Courses</NavLink>
            <NavLink className={({isActive})=> `${isActive ? 'text-emerald-500' : 'text-white'} hover:text-emerald-400 transition-colors`} to="about-us" >About Us</NavLink>
            <NavLink className={({isActive})=> `${isActive ? 'text-emerald-500' : 'text-white'} hover:text-emerald-400 transition-colors`} to="contact-us" >Contact Us</NavLink>
            {
              token === null ? (
                <>
                  <NavLink to='sign-up' className="bg-emerald-500 text-lg font-medium hover:bg-emerald-600 px-5 py-2 rounded-lg transition-colors">
                    Sign Up
                  </NavLink>
                  <NavLink to='log-in' className="bg-white text-lg font-medium text-emerald-500 hover:bg-emerald-600 hover:text-white px-6 py-2 rounded-lg transition-colors">
                    Log In
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to='cart' className="bg-emerald-500 text-lg font-medium hover:bg-emerald-600 px-5 py-2 rounded-lg transition-colors">
                    <FaCartShopping />
                  </NavLink>
                  <NavLink className="bg-white group text-lg font-medium text-emerald-500 hover:bg-emerald-600 hover:text-white px-2 py-2 rounded-full transition-colors">
                    <img src={user.image} alt="" className='w-[40px] h-[40px] rounded-full'/>
                      <div className="invisible absolute left-[85%] top-[40%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col gap-2 rounded-lg bg-emerald-500 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <NavLink to='dashboard/my-profile' className={({isActive}) => `${isActive? 'bg-blue-700': 'bg-blue-500'} rounded-lg px-3 py-1 text-center`}>My Profile</NavLink>
                      <button onClick={()=> dispatch(logout(navigate))} className='bg-red-500 text-white rounded-lg px-3 py-1 text-center'>Log Out</button>
                    </div>
                  </NavLink>
                  
                </>
              )
            }
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <NavLink className={({isActive})=> `${isActive ? 'text-emerald-500' : 'text-white'} hover:text-teal-600`} to="" >Home</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-emerald-500' : 'text-white'} hover:text-teal-600`} to="courses" >Courses</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-emerald-500' : 'text-white'} hover:text-teal-600`} to="about-us" >About Us</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-emerald-500' : 'text-white'} hover:text-teal-600`} to="contact-us" >Contact Us</NavLink>
              {
              token === null ? (
                <>
                  <NavLink to='sign-up' className="bg-emerald-500 text-lg font-medium hover:bg-emerald-600 px-5 py-2 rounded-lg transition-colors">
                    Sign Up
                  </NavLink>
                  <NavLink to='log-in' className="bg-white text-lg font-medium text-emerald-500 hover:bg-emerald-600 hover:text-white px-6 py-2 rounded-lg transition-colors">
                    Log In
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to='cart' className="bg-emerald-500 text-lg font-medium hover:bg-emerald-600 px-5 py-2 rounded-lg transition-colors">
                    <FaCartShopping />
                  </NavLink>
                  <NavLink onClick={handleClick}  className="bg-white text-lg font-medium text-emerald-500 hover:bg-emerald-600 hover:text-white px-2 py-2 rounded-full transition-colors">
                    <img src={user.image} alt="" className='w-[40px] h-[40px] rounded-full'/>
                  </NavLink>
                </>
              )
            }
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
