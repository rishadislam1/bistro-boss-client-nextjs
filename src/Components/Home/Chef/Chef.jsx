"use client";
import HeaderButton from "@/Components/Button/HeaderButton";
import Card from "@/Components/Crad/Card";
import img from "@/assets/home/slide1.jpg";
import { useGetMenuCardQuery } from "@/redux/features/shop/shopApi";
import Image from "next/image";
const Chef = () => {
  const { data: card } = useGetMenuCardQuery();


  return (
    <div className="mt-10 lg:mx-24 ">
      <HeaderButton
        subheader={"Should Try"}
        header={"CHEF RECOMMENDS"}
      ></HeaderButton>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-5">
        {card?.map((car) => (
          <Card key={car._id} item = {car}/>
        ))}
      </div>
    </div>
  );
};

export default Chef;
