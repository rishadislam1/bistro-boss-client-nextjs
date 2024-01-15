"use client"

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { useGetAddToCardQuery } from "@/redux/features/addToCard/addToCardApi";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useGetUserQuery } from "@/redux/features/user/userApi";
import { MdAdminPanelSettings } from "react-icons/md";



export default function UserLayout({ children }) {
  const {data:session} = useSession();
  const getAccessToken = JSON.parse(localStorage.getItem('auth'));
  const accessToken = getAccessToken?.accessToken;
  const userEmail = session?.user?.email;

  const {data:userData, isLoading} = useGetUserQuery({userEmail,accessToken});
  const {data} = useGetAddToCardQuery({userEmail,accessToken});



    const userDataLogin = JSON.parse(localStorage.getItem('auth'))
  
  
 if(session?.user || userDataLogin?.accessToken){
  return (
    
   
      
      <>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content p-10 bg-gray-300">
    {/* Page content here */}
    {children}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden "><GiHamburgerMenu />
</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-black uppercase">
      {/* Sidebar content here */}
      <div className="text-center"><h1 className="text-3xl font-bold">Bistro Boss</h1><br/>
      <h3 className="text-xl font-semibold">Restaurant</h3></div>
      <div className="mt-10 text-lg font-semibold">
        <li className="hover:text-white"><Link href='/user/profile'><FaHome/> User Home</Link></li>
        {/* <li className="hover:text-white"><Link href='/user/reservation'><FaCalendarAlt/> Reservation</Link></li> */}
        <li className="hover:text-white"><Link href='/user/payment'><MdPayments/> Payment History</Link></li>
        <li className="hover:text-white"><Link href='/user/cart'><FaCartArrowDown/> My Cart ({data?.length})</Link></li>
        <li className="hover:text-white"><Link href='/user/booking'><TbBrandBooking/> My Booking</Link></li>
        {userData&& <li className="hover:text-white"><Link href='/admin'><MdAdminPanelSettings /> Go To ADMIN PANNEL</Link></li>}
       
        
      </div>
      <div className="divider"> OR</div>
      <div className="mt-10 text-lg font-semibold">
        <li className="hover:text-white"><Link href='/'><FaHome/> Home</Link></li>
        <li className="hover:text-white"><Link href='/menu'><GiHamburgerMenu/> Menu</Link></li>
        <li className="hover:text-white"><Link href='/shop/salad'><FaShoppingBag/> Shop</Link></li>
        <li className="hover:text-white"><Link href='/contact'><MdContacts/> Contact</Link></li>
      </div>
    </ul>
  
  </div>
</div>
        </>
  
  )
 }
 
 else if(!session?.user || !userDataLogin?.accessToken){
  return redirect('/login');
}
}
