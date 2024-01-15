"use client";

import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";

const LoginHandle = () => {
  const { data: session } = useSession();
  const [register, { data: registerData }] = useRegisterMutation();

  const name = session?.user?.name;
  const email = session?.user?.email;
  const img = session?.user?.image;

  useEffect(() => {
    const data = {
      name: name,
      email: email,
      img: img,
    };

    register(data);
  }, [name, email, img, register]);

  localStorage.setItem(
    "auth",
    JSON.stringify({
      accessToken: registerData?.accessToken,
      user: session?.user,
    })
  );

  if (registerData) {
    redirect("/user/profile");
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoginHandle;
