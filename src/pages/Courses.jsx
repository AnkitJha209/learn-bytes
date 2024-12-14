import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse } from '../services/operations/courseAPI'
import CourseCard from '../components/core/course/CourseCard'

 const Courses = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getAllCourse())
  },[])
  
  const {courses} = useSelector(state => state.course)
  console.log(courses)
  
    
  return (
    <div className='grid grid-cols-12 gap-8 px-10 py-10 grid-rows-12 bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white min-h-screen'>
      {
        courses.map((course)=>(
          <CourseCard key={course._id} course={course}/>
        ))
      }
    </div>
  )
}

export default Courses
