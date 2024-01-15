"use client"

import HeaderButton from "@/Components/Button/HeaderButton";
import { useDeleteUserMutation, useGetAllUsersQuery, useUpdateUserMutation } from "@/redux/features/user/userApi";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";


const AllUser = () => {
  
    const {data:userData, refetch:refetchUser} = useGetAllUsersQuery();

    const [deleteUser, {isError}] = useDeleteUserMutation();

    const [updateUser, {isError:updateError}] = useUpdateUserMutation();
    
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
        deleteUser(item?._id);
        refetchUser();

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

  const handleUserToAdmin = (item)=>{
    Swal.fire({
        title: "Are you sure you want to make him admin?",
       
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update!",
      }).then((result) => {
        if (result.isConfirmed) {
            updateUser(item?._id);
            refetchUser();
  
          if (updateError) {
            Swal.fire({
              title: "NOT Deleted!",
              text: "Something wend wrong",
              icon: "Fail",
            });
          } else {
            Swal.fire({
              title: "Updated!",
              text: "User has been updated.",
              icon: "success",
            });
          }
        }
      });
  }
  
    return (
        <div>
        <div className="flex justify-center items-center">
          <HeaderButton subheader={"How Many"} header={"MANAGE ALL USERS"} />
        </div>
        <div className="mt-10 bg-white border rounded p-5">
          <div className="flex flex-wrap justify-between items-center">
            <h1 className="text-xl font-bold">
              TOTAL ORDERS: {userData?.length}
            </h1>
           
          </div>
          {/* table */}
          <div className="mt-5">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="font-bold text-black text-lg">
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.map((item, index) => (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <h1 className="font-bold text-xl">{item.name}</h1>
                          </div>
                        </div>
                      </td>
                      <td>{item.email}</td>
                      <td className="text-xl">
                        {item.role==='admin'?<button className="btn btn-success text-white"><RiAdminFill/><p>Admin</p></button>:<button onClick={()=>handleUserToAdmin(item)} className="btn btn-success text-white"><FaUser/><p>User</p></button>}
                        </td>
                      <th className="">
                      
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

export default AllUser;