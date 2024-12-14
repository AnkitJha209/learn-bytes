import { toast } from "react-hot-toast"
import { setLoading, setToken } from "../../features/authSlice"
import { apiConnector } from "../apiConnnector"
import { courseEndpoints } from "../api"
import { getCourses, getDetails } from "../../features/courseSlice"

export const getAllCourse = () => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try{
            const res = await apiConnector("GET", courseEndpoints.GET_ALL_COURSE_API)
            console.log(res)
            dispatch(getCourses(res.data.data))
            toast.success("Course Fetched Successfully")
            
        }catch(err){
            console.log(err)
            toast.error("Could not fetch the courses")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export const getCourseDetails = (courseId) => {
    return async (dispatch) => {
        const toastId = toast.loading("loading...")
        dispatch(setLoading(true))
        try{
            const res = await apiConnector("POST", courseEndpoints.COURSE_DETAILS_API, {
                courseId
            })
            console.log("API Response", res)
            dispatch(getDetails(res.data.data))
            toast.success("Course Details Fetched Successfully")
        }catch(err){
            console.log(err)
            toast.error("Could not fetch Course Details")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}