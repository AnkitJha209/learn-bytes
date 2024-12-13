import React from 'react'
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white px-10">
      <div className="flex justify-between gap-10 p-10">
        <div>
          <div className="font-bold mb-2">
            <span className="text-2xl text-gray-200">L</span>
            <span className="text-xl ">earn</span>
            <span className="text-2xl text-gray-200">B</span>
            <span>ytes</span>
          </div>
          <div className="text-sm text-left">
            Transform your learning journey with expert-led courses and hands-on
            projects.
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-1">Quick Links</h2>
          <ul className="font-semibold">
            <li>
              <NavLink to="" className={`hover:text-white`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="courses" className={`hover:text-white`}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="contact-us" className={`hover:text-white`}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-1">Support</h2>
          <ul className="font-semibold">
            <li>
              <NavLink to="" className={`hover:text-white`}>
                Help Center
              </NavLink>
            </li>
            <li>
              <NavLink to="courses" className={`hover:text-white`}>
                Terms of Service
              </NavLink>
            </li>
            <li>
              <NavLink to="contact-us" className={`hover:text-white`}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-4 pb-5">
        <span>© 2024 Learn Bytes. All rights reserved.</span>
        <div className="flex gap-2 justify-between">
            <a className="hover:text-white font-medium" target="_blank" href="https://github.com/AnkitJha209"><FaGithub /></a>
            <a className="hover:text-white font-medium" target="_blank" href="https://www.linkedin.com/in/ankit-jha-8917442b7/"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
