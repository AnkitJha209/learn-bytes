import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCourseDetails } from '../services/operations/courseAPI'
import { useDispatch, useSelector } from 'react-redux'
import { apiConnector } from '../services/apiConnnector'
import { courseEndpoints } from '../services/api'

const CoursePage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=> {
        // const getCourseDetail = async (courseId) => {
        //     try {
        //         const res = await apiConnector("POST", courseEndpoints.COURSE_DETAILS_API, {
        //             courseId,
        //         });
        //         console.log(res.data.data);
        //     } catch (error) {

        //         console.error("Error fetching course details:", error);
        //     }
        // };
        // getCourseDetail(id);
        dispatch(getCourseDetails(id))
    },[id])
    const {courseDetails} = useSelector(state => state.course)
    console.log(courseDetails)
    
  return (
    <div className='min-h-screen text-green-300'>
      {courseDetails.courseName}
    </div>
  )
}

export default CoursePage
