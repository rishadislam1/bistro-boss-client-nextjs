"use client";
import Image from "next/image";
import "./login.css";
import img from "@/assets/others/authentication1.png";
import { FaGoogle } from "react-icons/fa6";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useSelector } from "react-redux";
import { pageTrack } from "@/redux/features/pages/pagesSlice";

const Login = () => {
  const captchaRef = useRef(null);
  const [btnValid, setBtnValid] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = (e) => {
    const value = captchaRef.current.value;

    if (validateCaptcha(value) == true) {
      setBtnValid(true);
    } else {
      alert("Captcha Does Not Match");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

 const {pageName} = useSelector((state)=> state.page)
 console.log(pageName)
 
  return (
    <div className="loginBg lg:p-44 md:p-24">
      <div className="loginBg shadow-lg shadow-black ">
        <div className="mx-20 flex lg:flex-nowrap flex-wrap gap-20">
          <div className="mt-14">
            <Image src={img} width={"600"} height={"auto"} alt="Login Image" />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl font-bold">LOGIN</h1>
            <form className="w-full" onSubmit={handleFormSubmit}>
              <div className="w-full mt-4">
                <div className="flex flex-col w-full">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="px-2 bg-white border border-gray-200 rounded py-2 mt-2"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <div className="flex flex-col w-full">
                  <label>Password*</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="px-2 bg-white border border-gray-200 rounded py-2 mt-2"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
              </div>
              <div className="mt-10">
                <LoadCanvasTemplate />
              </div>
              <div className="mt-4">
                <div className="flex flex-col w-full">
                  <label>Fill The Captcha*</label>
                  <input
                    ref={captchaRef}
                    type="text"
                    name="captcha"
                    id="captcha"
                    className="px-2 bg-white border border-gray-200 rounded py-2 mt-2"
                    required
                  />
                  <p
                    onClick={handleCaptcha}
                    className="w-full my-10 py-2 bg-blue-500 rounded-xl text-white font-bold flex justify-center items-center cursor-pointer"
                  >
                    Valid Captcha
                  </p>
                </div>
              </div>
              <input
                type="submit"
                className={`w-full my-10 py-2  rounded-xl text-white font-bold ${
                  btnValid ? "cursor-pointer bg-blue-500 " : "bg-gray-500"
                } `}
                disabled={!btnValid}
                value={`${btnValid ? "LogIn" : "Give Captcha Valid First"}`}
              />
            </form>

            <p>
              New Here?{" "}
              <Link href="/signup" className="text-blue-500">
                Create A New Account
              </Link>
            </p>
            <p className="mt-5">Or SignIn With</p>
            <div className="my-10 flex justify-center items-center gap-5 text-xl">
              <button onClick={()=>{signIn('google',{callbackUrl:`${pageName?pageName:'http://localhost:3000/user/profile'}`})}} className="border p-2 border-red-500 rounded-full hover:text-white hover:bg-red-500 cursor-pointer transition-all duration-700">
                <FaGoogle />{" "}
              </button>
              <button onClick={()=>{signIn('github')}} className="border p-2 border-blue-500 rounded-full hover:text-white hover:bg-blue-500 cursor-pointer transition-all duration-700">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
