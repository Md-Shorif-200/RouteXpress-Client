import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/HomePage/Home";
import SignUp from "../UserAuth/SignUp";
import LogIn from "../UserAuth/LogIn";
import BookPercelForm from "../Pages/Book_Percel/BookPercelForm";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard_Redirect_Page from "../Dashboard_Pages/Dashboard_Redirect_Page";
import BookingHIstory from "../Dashboard_Pages/Customer_Dashboard/BookingHIstory";
import AllUsers from "../Dashboard_Pages/Admin_Dashboard/AllUsers";
import AllPercels from "../Dashboard_Pages/Admin_Dashboard/AllPercels";




export const router = createBrowserRouter([
  // ---------------------  main layout
  {
    path: "/",
    errorElement : <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children : [
         {
             path : '/',
             element : <Home></Home>
         },
         {
          path : 'sign-up',
          element : <SignUp></SignUp>
         },
         {
          path : 'log-in',
          element : <LogIn></LogIn>
         },
         {
          path : 'book-percel',
          element : <BookPercelForm></BookPercelForm>
         }
    ]
  },
    // ------------------  Dashboard Layout
  {
      path : '/dashboard',
      errorElement : <ErrorPage></ErrorPage>,
      element : <DashboardLayout></DashboardLayout>,
      children : [
         {
          path : '/dashboard',
          element : <Dashboard_Redirect_Page></Dashboard_Redirect_Page>
         },
         {
          path : '/dashboard/booking-history',
          element : <BookingHIstory></BookingHIstory>
         },
         {
          path : '/dashboard/admin',
          element : <AllUsers></AllUsers>
         },
         {
          path : '/dashboard/all-percels',
          element : <AllPercels></AllPercels>
         }
      ]

  }
]);