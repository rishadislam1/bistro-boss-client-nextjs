"use client";
import HeaderButton from "@/Components/Button/HeaderButton";
import {
  useDeleteCartMutation,
  useGetAddToCardQuery,
} from "@/redux/features/addToCard/addToCardApi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import Link from "next/link";

const Cart = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const getAccessToken = JSON.parse(localStorage.getItem("auth"));
  const accessToken = getAccessToken?.accessToken;

  const { data: addToCartData, refetch: refetchCart } = useGetAddToCardQuery({
    userEmail,
    accessToken,
  });

  const totalPrice = addToCartData?.reduce((sum, item) => item.price + sum, 0);

  const [deleteCart, { isError }] = useDeleteCartMutation();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCart(item?._id);
        refetchCart();

        if (isError) {
          Swal.fire({
            title: "NOT Deleted!",
            text: "Something wend wrong",
            icon: "Fail",
          });
        } else {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <HeaderButton subheader={"My Cart"} header={"WANNA ADD MORE?"} />
      </div>
      <div className="mt-10 bg-white border rounded p-5">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-xl font-bold">
            TOTAL ORDERS: {addToCartData?.length}
          </h1>
          <h1 className="text-xl font-bold">TOTAL BILLS: ${totalPrice?.toFixed(2)}</h1>
          <Link href={`/user/payment/${totalPrice?.toFixed(2)}`}><button className="btn btn-sm btn-warning">PAY</button></Link>
        </div>
        {/* table */}
        <div className="mt-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="font-bold text-black text-lg">
                  <th>#</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {addToCartData?.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image
                              src={item.image}
                              height={100}
                              width={100}
                              alt={item.name}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <th className="">
                      <button className="btn btn-success text-white">
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-error text-white  ml-5"
                      >
                        <MdDeleteForever />
                      </button>
                    </th>
                  </tr>
                ))}
                {/* row 1 */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
