"use client";
import Image from "next/image";
import "./signup.css";
import img from "@/assets/others/authentication1.png";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  useJwtMutation,
  useRegisterMutation,
} from "@/redux/features/auth/authApi";

const SignUp = () => {
  const [register, {data:registrationData}] = useRegisterMutation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const data = {
      name: name,
      email: email,
      password: password,
    };
   
    register(data);
 
  };
  return (
    <div className="loginBg lg:p-44 md:p-24">
      <div className="loginBg shadow-lg shadow-black ">
        <div className="mx-20 flex lg:flex-nowrap flex-wrap gap-20">
          <div className="mt-14">
            <Image src={img} width={"600"} height={"auto"} alt="Login Image" />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl font-bold">SIGNUP</h1>
            <form className="w-full" onSubmit={handleFormSubmit}>
              <div className="w-full mt-4">
                <div className="flex flex-col w-full">
                  <label>Name*</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="px-2 bg-white border border-gray-200 rounded py-2 mt-2"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
              </div>

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

              <input
                type="submit"
                className={`w-full my-10 py-2  rounded-xl text-white font-bold  bg-blue-500 cursor-pointer`}
                value={"SignUp"}
              />
            </form>
            <p>
              Already Have An Account?{" "}
              <Link href="/login" className="text-red-500">
                Login Here
              </Link>
            </p>
            <p className="mt-5">Or SignUp With</p>
            <div className="my-10 flex justify-center items-center gap-5 text-xl">
              <div className="border p-2 border-red-500 rounded-full hover:text-white hover:bg-red-500 cursor-pointer transition-all duration-700">
                <FaGoogle />{" "}
              </div>
              <div className="border p-2 border-blue-500 rounded-full hover:text-white hover:bg-blue-500 cursor-pointer transition-all duration-700">
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
