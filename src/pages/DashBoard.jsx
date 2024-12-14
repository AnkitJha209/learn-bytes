import React from 'react'
import SideBar from '../components/core/dashboard/SideBar'
import { Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default DashBoard
