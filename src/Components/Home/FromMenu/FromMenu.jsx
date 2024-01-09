import HeaderButton from "@/Components/Button/HeaderButton";
import "./frommenu.css";
import Image from "next/image";
import img from "@/assets/home/featured.jpg";

const FromMenu = () => {
  return (
    <>
      <div className="mt-10  lg:p-54 md:p-24 menubg">
      {/* <div className="z-0 absolute top-0 left-0 bottom-0 right-0 bg-black w-full bg-opacity-60"></div> */}
        <div className=" bg-black bg-opacity-60 rounded-xl shadow-lg shadow-gray-900">
          <div className="text-white">
            <HeaderButton   
              subheader={"Check It Out"}
              header={"FROM OUR MENU"}
            ></HeaderButton>
          </div>
          <div className="mt-5 flex flex-wrap justify-center items-center gap-5">
            <div className="mb-10">
              <Image src={img} width={"300"} height={"auto"} alt="image" />
            </div>
            <div className="text-white flex flex-col justify-center items-center">
              <p>March 20, 2023</p>
              <p>WHERE CAN I GET SOME?</p>
              <button className="text-white border-b border-white rounded-xl px-3 my-5">
                Read More
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default FromMenu;
