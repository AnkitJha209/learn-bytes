import React from 'react'
import {useSelector} from 'react-redux'

const MyProfile = () => {
  const {user} = useSelector(state => state.profile)
  console.log(user)
  return (
    <div className='p-5 bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white sm:col-span-9 col-span-12 sm:min-h-screen text-7xl'>
      <div className='border-2 px-5 py-2 border-emerald-300 rounded-xl min-h-fit gap-5 grid grid-cols-12'>
        <div className='col-span-12 flex border-b-2 border-gray-200 pb-2 justify-center items-center'><img src={user.image} className='rounded-full w-[100px]' alt="" /></div>
        <div className='col-span-12 flex text-white border-b-2 border-gray-400 pb-5 justify-between items-center'><h3 className='text-xl font-semibold'>Account Name</h3> <h3 className='text-xl font-semibold'>{user.firstName} {user.lastName}</h3></div>
        <div className='col-span-12 flex text-white border-b-2 border-gray-400 pb-5 justify-between items-center'><h3 className='text-xl font-semibold'>Account Type</h3> <h3 className='text-xl font-semibold'>{user.accountType}</h3></div>
        <div className='col-span-12 flex text-white border-b-2 border-gray-400 pb-5 justify-between items-center'><h3 className='text-xl font-semibold'>Email</h3> <h3 className='text-xl font-semibold'>{user.email}</h3></div>
        <div className='col-span-12 flex text-white border-b-2 border-gray-400 pb-5 justify-between items-center'><h3 className='text-xl font-semibold'>Date Of Birth</h3> <h3 className='text-xl font-semibold'>{user.additionalDetail.dateOfBirth? user.additionalDetail.dateOfBirth: 'N/A'}</h3></div>
        <div className='col-span-12 flex text-white border-b-2 border-gray-400 pb-5 justify-between items-center'><h3 className='text-xl font-semibold'>Gender</h3> <h3 className='text-xl font-semibold'>{user.additionalDetail.gender? user.additionalDetail.gender: 'N/A'}</h3></div>
        <div className='col-span-12 flex text-white pb-5 justify-between items-center'><h3 className='text-xl font-semibold'>About</h3> <h3 className='text-xl font-semibold'>{user.additionalDetail.about? user.additionalDetail.about: 'N/A'}</h3></div>
      </div>
    </div>
  )
}

export default MyProfile
