import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import img_1 from '../assets/lotte-react/courier-2.json'
import img_2 from '../assets/lotte-react/courier-3.json'
import img_3 from '../assets/lotte-react/document checking loader.json'
import Lottie from "lottie-react";
import useAuth from "../Custom-Hooks/useAuth";
import toast from "react-hot-toast";
import Social_LogIn from "./Social_LogIn";




const LogIn = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

 
  const {logIn} = useAuth()
  const [showPassword, setshowPassword] = useState(false); 
  const loacation = useLocation();
  const navigate = useNavigate();
  

  const from = location.state?.from?.pathname || "/";


  const onsubmit = async (data) => {
  

    try {
      const result = await logIn(data.email, data.password);

      navigate(from, { replace: true });
      toast.success("log In Succssfully");
    } catch (error) {
      toast.error(error.message);
    }finally{
          reset();
    }

  


  };

 


  return (
      <div>
        
         {/* <Navbar></Navbar> */}
   
      <div className="w-full  min-h-screen  grid  lg:grid-cols-2">
                    {/* -----------log-in form section  */}
        <div className=" flex justify-center flex-col p-[6%] sm:p-[10%] md:px-[15%] md:py-[8%] lg:px-[12%]  ">
           <div className="form_section bg-white px-4 sm:px-6 md:px-8  lg:px-10 py-10 rounded-xl">
             <h2 className="text-3xl font-bold  mb-6">Hellow. Welcome Back</h2>
        <form action="" onSubmit={handleSubmit(onsubmit)}>
          {/*----------------- email */}
          <div>
            <label htmlFor="" className="block font-semibold capitalize">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "email is Required" })}
              className="w-full px-3 py-2  "
              placeholder="Enter Email Adress"
            />

            {errors.email && (
              <p className="form_error">{errors.email.message} </p>
            )}
          </div>

          {/* ------------ password -------*/}
          <div className="relative">
            <label htmlFor="" className="block font-semibold capitalize">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "password is Required",

                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                  message:
                    "Password Must Contain  1 Uppercase , 1 Lowercase, 1 number , 1 symbol and be at least 6 characters",
                },
              })}
              className="w-full px-3 py-2  "
              placeholder="Enter Strong password "
            />

            {errors.password && (
              <p className="form_error">{errors.password.message} </p>
            )}

            <div
              className="password_toggle_icon absolute top-1/2 right-3 cursor-pointer"
              onClick={() => setshowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </div>
          </div>

          <label
            className=" capitalize text-blue-600 text-sm font-semibold "
            // onClick={handleForgotPassword}
          >
            <p>Forgot Password ?</p>
          </label>

          {/* -----------submit button */}

          <button
            type="submit"
            className="primary_btn w-full mt-3 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Log In"}
          </button>

          <p className="text-base capitalize text-end my-2 font-semibold">
            Don't have an acount ? please{" "}
            <Link to="/sign-up" className="primary_text_color">
              Creat Account
            </Link>
          </p>
        </form>

        <p className="text-lg primary_text_color text-center font-semibold capitalize mb-2">
          or
        </p>

        <div>
          <Social_LogIn></Social_LogIn>
        </div>
      </div>
        </div>
                    {/* --------------  img  */}
        <div className="primary_bg_color w-full flex justify-center items-center  px-4 sm:px-6 md:px-8  lg:px-10">
   
           <Lottie animationData={img_1}></Lottie>
        </div>
  
    </div>
      </div>
  );
};

export default LogIn;
