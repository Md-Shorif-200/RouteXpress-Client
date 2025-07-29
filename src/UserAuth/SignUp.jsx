import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img_1 from "../assets/lotte-react/Courier.json";
import Lottie from "lottie-react";



// image hosting 
// const imgHosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
// const imgHosting_api = `https://api.imgbb.com/1/upload?key=${imgHosting_key}`


const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
    const [showPassword, setshowPassword] = useState(false);

  

  //   form submit function

  const onsubmit = async (data) => {

        





  
  };

  return (
    <div className="primary_bg_color w-full min-h-screen flex justify-center items-center z-0 py-10 md:py-14 lg:py-20 ">

      <div className="bg-white w-[85%]  z-10 shadow-2xl grid grid-cols-1 lg:grid-cols-2">
                {/* ----------- lottie img */}
        <div className="form_img primary_bg_color w-full flex justify-center items-center py-6 ">
           <Lottie animationData={img_1}></Lottie>
        </div>
                {/* ---------------- sign-up form  */}
        <div className="form_section p-6">
              <h2 className="text-3xl font-bold text-center mb-6">Create a New Account</h2>
          <form action="" onSubmit={handleSubmit(onsubmit)}>
            {/* -----------------name */}
            <div>
              <label htmlFor="" className="block font-semibold capitalize">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is Required" })}
                className="w-full px-3 py-2  "
                placeholder="Enter Your Name"
              />

              {errors.name && (
                <p className="form_error">{errors.name.message} </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-x-2">
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

              {/*--------------- password */}
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
            </div>

            {/*--------------- profile photo */}
            <div>
              <label htmlFor="" className="block capitalize font-semibold">
                Profile Photo
              </label>
              <input
                type="file"
                {...register("image", { required: "photo is Required" })}
                className="w-full px-3 py-2 file:rounded-full file:border-0 file:bg-emerald-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-emerald-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 "
                placeholder="Upload Photo"
              />

              {errors.image && <p>{errors.image.message} </p>}
            </div>

            {/* submit button */}

            <button
              type="submit"
              className="primary_btn w-full mt-3 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>

            <p className="text-base capitalize sm:text-end my-2 font-semibold">
              Already have an acount ? please{" "}
              <Link to="/log-in" className="primary_text_color">
                Log In
              </Link>
            </p>
          </form>

          <p className="text-lg primary_text_color text-center font-semibold capitalize mb-2">
            or
          </p>

          <div>
            {/* <SocailLogIn></SocailLogIn> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
