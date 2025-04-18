import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import profileReducer from '../features/profileSlice'
import cartReducer from '../features/cartSlice'
import courseReducer from '../features/courseSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    course: courseReducer
  },
})
