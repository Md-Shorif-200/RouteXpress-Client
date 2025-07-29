import React from "react";
import { FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../Custom-Hooks/useAuth";

const Social_LogIn = () => {
  const { googleLogIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = async () => {
    try {
      const result = await googleLogIn();
      toast.success("log In successfully");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.meassage);
    }
  };

  return (
    <button
      className="w-full bg-white text-black border border-gray-400 py-2 px-4 rounded-md flex justify-center items-center gap-x-4 font-semibold cursor-pointer"
      onClick={handleGoogleLogIn}
    >
      <FaGoogle className="text-red-500"></FaGoogle> Log In With Google
    </button>
  );
};

export default Social_LogIn;
