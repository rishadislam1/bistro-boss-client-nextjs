"use client";
import { useGetShopQuery } from "@/redux/features/shop/shopApi";
import MenuBg from "../Menu/MenuBg/MenuBg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";
import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import Card from "../Crad/Card";

const Shop = ({ params }) => {
  const { data, isLoading } = useGetShopQuery();
  const category = ["salad", "pizza", "soup", "deserts", "drinks"];
  const initialIndex = category.indexOf(params);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const salad = data?.filter((salad) => salad.category === "salad");
  const pizza = data?.filter((salad) => salad.category === "pizza");
  const soup = data?.filter((salad) => salad.category === "soup");
  const drinks = data?.filter((salad) => salad.category === "drinks");
  const popular = data?.filter((salad) => salad.category === "popular");
  const dessert = data?.filter((salad) => salad.category === "dessert");
  const offered = data?.filter((salad) => salad.category === "offered");

  return (
    <div>
      <div>
        {" "}
        <MenuBg
          bgImage={"shop"}
          header={"OUR SHOP"}
          subheader={"WOULD YOU LIKE TO TRY A DISH?"}
        />
      </div>

      <div className="mt-14">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="border-none">
            <div className="flex justify-center items-center overflow-scroll md:overflow-hidden">
              <Tab
                className={`cursor-pointer hover:bg-black py-2 px-5 rounded-xl transition-all duration-1000  ${
                  tabIndex === 0 ? "border-b-2 " : "border-none"
                }`}
              >
                SALAD
              </Tab>
              <Tab
                className={`cursor-pointer hover:bg-black py-2 px-5 rounded-xl transition-all duration-1000  ${
                  tabIndex === 1 ? "border-b-2 " : "border-none"
                }`}
              >
                PIZZA
              </Tab>
              <Tab
                className={`cursor-pointer hover:bg-black py-2 px-5 rounded-xl transition-all duration-1000  ${
                  tabIndex === 2 ? "border-b-2 " : "border-none"
                }`}
              >
                SOUP
              </Tab>
              <Tab
                className={`cursor-pointer hover:bg-black py-2 px-5 rounded-xl transition-all duration-1000  ${
                  tabIndex === 3 ? "border-b-2 " : "border-none"
                }`}
              >
                DESERTS
              </Tab>
              <Tab
                className={`cursor-pointer hover:bg-black py-2 px-5 rounded-xl transition-all duration-1000  ${
                  tabIndex === 4 ? "border-b-2 " : "border-none"
                }`}
              >
                DRINKS
              </Tab>
            </div>
          </TabList>

          <TabPanel className="transition-all duration-1000">
            {isLoading && (
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
                <p className="text-red-500 font-bold text-3xl">
                  Loading.........
                </p>
              </div>
            )}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
              {salad?.map((sala) => (
               
                <Card key={sala._id} item={sala}/>
              ))}
            </div>
          </TabPanel>
          {/* pizza */}
          <TabPanel>
            {isLoading && (
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
                <p className="text-red-500 font-bold text-3xl">
                  Loading.........
                </p>
              </div>
            )}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
              {pizza?.map((sala) => (
                
                <Card key={sala._id} item={sala}/>
              ))}
            </div>
          </TabPanel>
          {/* soup */}

          <TabPanel>
            {isLoading && (
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
                <p className="text-red-500 font-bold text-3xl">
                  Loading.........
                </p>
              </div>
            )}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
              {soup?.map((sala) => (
                
                <Card key={sala._id} item={sala}/>
              ))}
            </div>
          </TabPanel>

          {/* deserts */}
          <TabPanel>
            {isLoading && (
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
                <p className="text-red-500 font-bold text-3xl">
                  Loading.........
                </p>
              </div>
            )}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
              {dessert?.map((sala) => (
                <Card key={sala._id} item={sala}/>
              ))}
            </div>
          </TabPanel>

          {/* drinks */}
          <TabPanel>
            {isLoading && (
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
                <p className="text-red-500 font-bold text-3xl">
                  Loading.........
                </p>
              </div>
            )}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
              {drinks?.map((sala) => (
                <Card key={sala._id} item={sala}/>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
