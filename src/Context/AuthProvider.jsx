import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.init";
import useAxiosSecure from "../Custom-Hooks/Api/useAxiosSecure";
// import toast from "react-hot-toast";

export const authContext = createContext(); // creat context api
const auth = getAuth(app); // firebase auth

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user state
  const [loading, setLoading] = useState(false); // loading state
  const googleProvider = new GoogleAuthProvider();
  const axiosSecure = useAxiosSecure(); // private api

  // console.log(user);

  // Firebase observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
       console.log(currentUser);
       

      if (currentUser) {
        const userInfo = {
          userName: currentUser.displayName,
          email: currentUser.email,
          image: currentUser.photoURL,
          role: "customer",
          joiningDate: new Date(),
        };

        try {
          // send user informaton  to database
          const result = await axiosSecure.post("/api/users", userInfo);
          // console.log(result);
          
        } catch (error) {
          // toast.error(error.message);
          console.log(error);
          
        }
      }

     
    });

     return () => {
        return unsubscribe();
      };
      
  }, []);

  // firebase sign up
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  firebase log in

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google logIn system

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // firebase  log out

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // authContext Info
  const authContextInfo = {
    user,
    loading,
    creatUser,
    logIn,
    googleLogIn,
    logOut,
    updateUserProfile,
  };

  return (
    <authContext.Provider value={authContextInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
