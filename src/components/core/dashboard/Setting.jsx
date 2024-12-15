import React from 'react'
import { NavLink } from 'react-router-dom'

const Setting = () => {
  return (
    <div className='p-10 bg-gradient-to-br gap-10 from-teal-900 via-emerald-900 to-green-900 text-white flex flex-col items-center sm:col-span-9 min-h-screen col-span-12 sm:min-h-screen'>
      <NavLink className={({isActive})=>`${isActive? 'bg-emerald-600': 'bg-teal-400'} px-5 py-4 w-full text-center font-semibold text-2xl hover:bg-emerald-500 rounded-xl`} to='/dashboard/edit-profile'>Edit Profile</NavLink>
      <NavLink className={({isActive})=>`${isActive? 'bg-emerald-600': 'bg-teal-400'} px-5 py-4 w-full text-center font-semibold text-2xl hover:bg-emerald-500 rounded-xl`} to='/dashboard/delete-account'>Delete Account</NavLink>
    </div>
  )
}

export default Setting
