
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 flex flex-wrap md:flex-nowrap justify-center items-center bg-gray-900">
      <div className="bg-gray-700 w-full text-white flex flex-col justify-end md:items-end items-center gap-3 p-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>Mirpur,10, Dhaka</p>
        <p>+88 01705978622</p>
        <p>Mon - Fri: 08:00 - 22:00</p>
        <p>Sat - Sun: 10:00 - 23:00</p>
      </div>
      <div className="bg-gray-900 w-full text-white flex flex-col md:justify-start md:items-start items-center gap-3 p-10">
        <h1 className="text-3xl font-bold">Follow Us</h1>
        <p>Join Us On Social Media</p>
        <div className="flex gap-5">
          <Link href={"https://www.facebook.com/"} target="_blank">
            <FaFacebook />
          </Link>
          <Link href={"https://www.x.com/"} target="_blank">
            <FaTwitter />
          </Link>
          <Link href={"https://www.instagram.com/"} target="_blank">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
