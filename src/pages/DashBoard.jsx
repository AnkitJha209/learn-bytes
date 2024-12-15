import React from 'react'
import SideBar from '../components/core/dashboard/SideBar'
import { Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div className='grid grid-cols-12'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default DashBoard
