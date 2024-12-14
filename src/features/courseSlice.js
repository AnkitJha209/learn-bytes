import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses : [],
    courseDetails : {}
}

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers:{
        getCourses: (state, action) => {
            console.log(action.payload) 
            state.courses = action.payload
        },
        getDetails : (state, action) => {
            console.log(action.payload)
            state.courseDetails = action.payload
        }
    }
})

export const {getCourses, getDetails} = courseSlice.actions

export default courseSlice.reducer