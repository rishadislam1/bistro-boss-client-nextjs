"use client"
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import "./header.css";
import { usePathname } from "next/navigation";


const Header = () => {
  const pathName = usePathname();
  const navOption = (
    <>
      <li>
        <Link href='/' className={`${pathName=='/'&&'text-yellow-500'}`}>HOME</Link>
      </li>

      <li>
        <Link href='/dashboard' className={`${pathName=='/dashboard'&&'text-yellow-500'}`}>DASHBOARD</Link>
      </li>

      <li>
        <Link href='/menu' className={`${pathName=='/menu'&&'text-yellow-500'}`}>OUR MENU</Link>
      </li>

      <li>
        <Link href='/shop' className={`${pathName=='/shop'&&'text-yellow-500'}`}>OUR SHOP</Link>
      </li>

      <li>
        <Link href='/contact' className={`${pathName=='/contact'&&'text-yellow-500'}`}>CONTACT US</Link>
      </li>

      <li className="text-xl">
        <Link href='/cart' className={`${pathName=='/cart'&&'text-yellow-500'}`}><CiShoppingCart /></Link>
      </li>

      

      <li>
        <Link href='/login' className={`${pathName=='/login'&&'text-yellow-500'}`}>LOGIN</Link>
      </li>

      <li>
        <Link href='/signup' className={`${pathName=='/signup'&&'text-yellow-500'}`}>SIGNUP</Link>
      </li>
      
    </>
  );
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navOption}
          </ul>
        </div>
        <Link href='/' className="btn btn-ghost text-xl">Bistro BOSS</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-5 menu-horizontal px-1">
            {navOption}
        </ul>
      </div>
    
    </div>
  );
};

export default Header;
