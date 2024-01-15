import {  usePostAddToCardMutation } from "@/redux/features/addToCard/addToCardApi";
import { intervalTrack } from "@/redux/features/pages/pagesSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Card = ({ item }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { image, name, recipe } = item;
  const [postAddToCard, { isError }] = usePostAddToCardMutation();
  const handleCart = (item) => {
    const data = {
      menuItemId: item._id,
      name: item.name,
      image: item.image,
      price: item.price,
      email: session?.user?.email
    }
    if (session?.user) {

  
      postAddToCard(data);
      
    dispatch(intervalTrack(true));
      if(isError){
        Swal.fire({
          title: "Something wend wrong.!",
          text: "Please try to add again!",
          icon: "error"
        });
      }
      else {
        Swal.fire({
          title: "Added Successfully",
          icon: "success",
        });
      }
    } else {
      Swal.fire({
        title: "You are not login. Kindly Login First",
        text: "You won't be add to cart without login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    }
  };
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl ">
      <figure>
        <Image src={image} width={"400"} height={"400"} alt={name} />
      </figure>
      <div className="card-body flex flex-col justify-center items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={() => handleCart(item)} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
