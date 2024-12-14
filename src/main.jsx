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
import PrivateRoute from './components/core/auth/PrivateRoute.jsx'
import DashBoard from './pages/DashBoard.jsx'
import MyProfile from './components/core/dashboard/MyProfile.jsx'
import Setting from './components/core/dashboard/Setting.jsx'
import EditProfile from './components/core/setting/EditProfile.jsx'
import DeleteAccount from './components/core/setting/DeleteAccount.jsx'
import CoursePage from './pages/CoursePage.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<HomePage/>}/>
    <Route path='courses' element={<Courses/>}/>
    <Route path='courses/:id' element={<CoursePage/>}/>
    <Route path='about-us' element={<AboutUs/>}/>
    <Route path='contact-us' element={<ContactUs/>}/>
    <Route path='sign-up' element={<OpenRoute><SignUp/></OpenRoute>}/>
    <Route path='log-in' element={<OpenRoute><LogIn/></OpenRoute>}/>
    <Route path='verify-email' element={<OpenRoute><VerifyEmail/></OpenRoute>}/>
    <Route path='dashboard/' element={<PrivateRoute><DashBoard/></PrivateRoute>}>
      <Route path='my-profile' element={<MyProfile/>} />
      <Route path='setting/' element={<Setting/>}>
        <Route path='edit-profile' element={<EditProfile/>}/>
        <Route path='delete-account' element={<DeleteAccount/>}/>
      </Route>
    </Route>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  <Toaster/>
  </Provider>
)
