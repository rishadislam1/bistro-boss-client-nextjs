"use client";
import React, { useState } from "react";
import MenuBg from "../Menu/MenuBg/MenuBg";
import HeaderButton from "../Button/HeaderButton";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [verified, setVerified] = useState(false);
  
function onChange(value) {
    value&&setVerified(true);
  }

  const handleForm = (e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <div>
        {" "}
        <MenuBg
          bgImage={"contact"}
          header={"CONTACT US"}
          subheader={"WOULD YOU LIKE TO TRY A DISH?"}
        />
      </div>
      {/* visit us */}
      <div className="mt-10">
        <HeaderButton subheader={"Visit Us"} header={"OUR LOCATION"} />
      </div>
      <div className="mt-10 flex lg:flex-nowrap flex-wrap justify-center items-center gap-5 mx-10">
        <div className="border rounded-lg w-full">
          <div className="w-full bg-yellow-700 text-white flex justify-center items-center p-3">
            <FaPhone />
          </div>
          <div className=" bg-gray-500 mx-10 text-white text-center p-5">
            <h1 className="text-xl">PHONE</h1>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>

        <div className="border rounded-lg w-full">
          <div className="w-full bg-yellow-700 text-white flex justify-center items-center p-3">
            <CiLocationOn />
          </div>
          <div className=" bg-gray-500 mx-10 text-white text-center p-5">
            <h1 className="text-xl">ADDRESS</h1>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>

        <div className="border rounded-lg w-full">
          <div className="w-full bg-yellow-700 text-white flex justify-center items-center p-3">
            <CiClock1 />
          </div>
          <div className=" bg-gray-500 mx-10 text-white text-center p-2">
            <h1 className="text-xl">WORKING HOURS</h1>
            <p>Sat - Sun: 10:00 - 23:00</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
          </div>
        </div>
      </div>
      {/* contact form */}
      <div className="mt-10">
        <HeaderButton subheader={"Send Us A Message"} header={"CONTACT FORM"} />
      </div>

      <div className="rounded-lg p-10 lg:mx-20 mx-10 bg-gray-300">
        <form onSubmit={handleForm}>
          <div className="flex gap-7 w-full">
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
          <div className="flex gap-7 w-full mt-4">
            <div className="flex flex-col w-full">
              <label>Phone*</label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="px-2 bg-white border border-gray-200 rounded py-2 mt-2"
                placeholder="Enter Your Number"
                required
              />
            </div>
          </div>
          <div className="flex gap-7 w-full mt-4">
            <div className="flex flex-col w-full">
              <label>Message*</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="px-2 bg-white border border-gray-200 rounded py-2 mt-2"
                placeholder="Message Us"
                required
              ></textarea>
            </div>
          </div>
          {/* rechapcha */}
          <div className="mt-10" >
          <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
          </div>
          <button
            className="btn btn-outline btn-primary w-full mt-10 flex justify-center items-center"
            disabled={!verified}
          >
            Send Message <FaTelegram className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
