import React, { useState } from 'react'
import { Menu, X, Lightbulb } from 'lucide-react';
// import { NavLink } from '../ui/NavLink';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

//     const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);
//   const { items } = useSelector((state) => state.cart);

//   const [subLinks, setSubLinks] = useState([]);

//   const fetchLinks = async () => {
//     try {
//       const result = await apiConnector("GET", categories.CATEGORIES_API);
//       console.log(result);
//       setSubLinks(result.data.allCategory);
//     } catch (err) {
//       console.log("Could not get category list");
//     }
//   };

//   useEffect(() => {
//     fetchLinks();
//   }, []);
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
            <NavLink className={({isActive})=> `${isActive} ? 'bg-gray-900' : 'bg-white' hover:text-emerald-400 transition-colors`} to="/">Home</NavLink>
            <NavLink className={({isActive})=> `${isActive} ? 'bg-gray-900' : 'bg-white' hover:text-emerald-400 transition-colors`} to="courses" >Courses</NavLink>
            <NavLink className={({isActive})=> `${isActive} ? 'bg-gray-900' : 'bg-white' hover:text-emerald-400 transition-colors`} to="about-us" >About Us</NavLink>
            <NavLink className={({isActive})=> `${isActive} ? 'bg-gray-900' : 'bg-white' hover:text-emerald-400 transition-colors`} to="contact-us" >Contact Us</NavLink>
            <NavLink to='sign-up' className="bg-emerald-500 text-lg font-medium hover:bg-emerald-600 px-5 py-2 rounded-lg transition-colors">
              Sign Up
            </NavLink>
            <NavLink to='log-in' className="bg-white text-lg font-medium text-emerald-500 hover:bg-emerald-600 hover:text-white px-6 py-2 rounded-lg transition-colors">
              Log In
            </NavLink>
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
              <NavLink className={({isActive})=> `${isActive} ? 'bg-gray-900' : 'bg-white' hover:bg-teal-600`} to="" text="Home" mobile />
              <NavLink className={({isActive})=> `${isActive} ? 'bg-gray-900' : 'bg-white' hover:bg-teal-600`} to="courses" text="Courses" mobile />
              <NavLink className={({isActive})=> `${isActive} ? 'bg-gray-900' : 'bg-white' hover:bg-teal-600`} to="about-us" text="About" mobile />
              <NavLink className={({isActive})=> `${isActive} ? 'bg-gray-900' : 'bg-white' hover:bg-teal-600`} to="contact-us" text="Contact" mobile />
              <NavLink to='sign-up' className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg transition-colors w-full">
                Sign Up
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
