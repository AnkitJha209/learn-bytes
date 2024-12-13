import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import OpenRoute from './components/core/auth/OpenRoute.jsx'
import SignUp from './pages/SignUp.jsx'
import Courses from './pages/Courses.jsx'
import { store } from './redux/store.js'
import HomePage from './pages/HomePage.jsx'
import LogIn from './pages/LogIn.jsx'
import { Toaster } from "react-hot-toast";
import VerifyEmail from './pages/VerifyEmail.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<HomePage/>}/>
    <Route path='courses' element={<Courses/>}/>
    <Route path='about-us' element={<AboutUs/>}/>
    <Route path='contact-us' element={<ContactUs/>}/>
    <Route path='sign-up' element={<OpenRoute><SignUp/></OpenRoute>}/>
    <Route path='log-in' element={<OpenRoute><LogIn/></OpenRoute>}/>
    <Route path='verify-email' element={<OpenRoute><VerifyEmail/></OpenRoute>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  <Toaster/>
  </Provider>
)
