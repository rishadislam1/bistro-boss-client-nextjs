"use client"

import HeaderButton from "@/Components/Button/HeaderButton";
import ItemsCheck from "@/Components/ItemsCheck/ItemsCheck";
import rectan from "@/assets/home/rectan.png";
import { useGetRandomQuery } from "@/redux/features/shop/shopApi";
import Link from "next/link";


const Menu = () => {
   const {data:menu} = useGetRandomQuery();
  
    return (
        <div className="mt-10">
            <HeaderButton subheader={'Check It Out'} header={'FROM OUR MENU'}></HeaderButton>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 lg:mx-24">
                {menu?.map(men=><div key={men._id}><ItemsCheck img={men.image} name={men.name} price={men.price} des={men.des}></ItemsCheck></div>)}
            </div>
            <div className="flex justify-center items-center mt-10">
            <Link href='/menu'><button className="btn btn-outline btn-primary">See All Menu</button>
</Link>
            </div>
        </div>
    );
};

export default Menu;