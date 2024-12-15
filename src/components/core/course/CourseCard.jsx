import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../features/cartSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const CourseCard = ({course}) => {
    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = (course) => {
        navigate(`${course._id}`)
    }
    const handleAddToCart = (e) => {
        e.stopPropagation()
        if(!token){
            toast.error('Please Login First')
            navigate('/log-in')
            return
        }
        dispatch(addToCart(course))
    }
  return (
    <div onClick={()=>handleClick(course)} className="bg-teal-800/30 hover:cursor-pointer col-span-12  sm:col-span-4 row-span-12 sm:row-span-9 flex flex-col gap-1 p-6 rounded-lg backdrop-blur-sm border border-teal-700/50 hover:transform hover:scale-105 transition-all">
          <div className="text-emerald-400 mb-4">
            <img src={course.thumbnail} alt="course-img" className='rounded-lg' />
          </div>
          <h3 className="text-2xl font-bold mb-2">{course.courseName}</h3>
          <h5 className="text-lg font-medium mb-2">Category : {course.category.name}</h5>
          <p className="text-teal-200">Price : ₹ {course.price}</p>
          <p className="text-teal-300 font-semibold">Instructor : {course.instructor.firstName} {course.instructor.lastName}</p>
          <button onClick={(e)=> handleAddToCart(e)} className='border-emerald-300 mt-5 rounded-lg text-center px-5 py-2 w-full hover:bg-emerald-500 border-2'>Add to Cart</button>
        </div>
  )
}

export default CourseCard
