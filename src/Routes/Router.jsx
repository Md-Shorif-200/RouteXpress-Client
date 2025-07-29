import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/HomePage/Home";
import SignUp from "../UserAuth/SignUp";
import LogIn from "../UserAuth/LogIn";



export const router = createBrowserRouter([
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
         }
    ]
  },
]);