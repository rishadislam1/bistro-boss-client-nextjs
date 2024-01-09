"use client";
import HeaderButton from "@/Components/Button/HeaderButton";
import MenuBg from "../MenuBg/MenuBg";
import ItemsCheck from "@/Components/ItemsCheck/ItemsCheck";
import ItemsButton from "@/Components/ItemsCheck/ItemsButton";
import { useGetShopQuery } from "@/redux/features/shop/shopApi";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { pageTrack } from "@/redux/features/pages/pagesSlice";

const Menu = () => {
  
  const dispatch = useDispatch();
  const { data } = useGetShopQuery();

  const salad = data?.filter((salad) => salad.category === "salad");
  const pizza = data?.filter((salad) => salad.category === "pizza");
  const soup = data?.filter((salad) => salad.category === "soup");
  const drinks = data?.filter((salad) => salad.category === "drinks");
  const popular = data?.filter((salad) => salad.category === "popular");
  const dessert = data?.filter((salad) => salad.category === "dessert");
  const offered = data?.filter((salad) => salad.category === "offered");

  const pathname = usePathname();
  dispatch(pageTrack(pathname));

  return (
    <div>
      {/* menu header */}
      <div>
        <MenuBg
          bgImage={"menuHeaderBg"}
          header={"OUR MENU"}
          subheader={"WOULD YOU LIKE TO TRY A DISH?"}
        />
        <div className="mt-10">
          <HeaderButton
            subheader={"Don't Miss"}
            header={"TODAY'S OFFER"}
          ></HeaderButton>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 lg:mx-24">
          {popular?.map((off) => (
            <div key={data._id}>
              <ItemsCheck
                img={off.image}
                name={off.name}
                des={off.recipe}
                price={off.price}
              />
            </div>
          ))}
        </div>
        <Link href={'/shop/drinks'}><ItemsButton btnText={"ORDER YOUR FAVORITE FOOD"} /></Link>
      </div>
      {/* menu header end */}

      {/* menu desert */}
      <div className="mt-10">
        <MenuBg
          bgImage={"desert"}
          header={"DESERT"}
          subheader={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 lg:mx-24">
          {dessert?.map((off) => (
            <div key={off.id}>
              <ItemsCheck img={off.image} name={off.name} des={off.recipe} price={off.price} />
            </div>
          ))}
        </div>
        <Link href={'/shop/deserts'}><ItemsButton btnText={"ORDER YOUR FAVORITE FOOD"} /></Link>
      </div>
      {/* menu desert end */}
      {/* menu pizz */}
      <div className="mt-10">
        <MenuBg
          bgImage={"pizza"}
          header={"PIZZA"}
          subheader={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 lg:mx-24">
          {pizza?.map((off) => (
            <div key={off.id}>
              <ItemsCheck img={off.image} name={off.name} des={off.recipe} price={off.price} />
            </div>
          ))}
        </div>
        <Link href={'/shop/pizza'}><ItemsButton btnText={"ORDER YOUR FAVORITE FOOD"} /></Link>
      </div>
      {/* menu pizza end */}
      {/* menu salad */}
      <div className="mt-10">
        <MenuBg
          bgImage={"salad"}
          header={"SALAD"}
          subheader={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 lg:mx-24">
          {salad?.map((off) => (
            <div key={off.id}>
              <ItemsCheck img={off.image} name={off.name} des={off.recipe} price={off.price} />
            </div>
          ))}
        </div>
        <Link href={'/shop/salad'}><ItemsButton btnText={"ORDER YOUR FAVORITE FOOD"} /></Link>
      </div>
      {/* menu salad end */}
      {/* menu soup */}
      <div className="mt-10">
        <MenuBg
          bgImage={"soup"}
          header={"SOUP"}
          subheader={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 justify-center items-center md:gap-10 gap-5 lg:mx-24">
          {soup?.map((off) => (
            <div key={off.id}>
              <ItemsCheck img={off.image} name={off.name} des={off.recipe} price={off.price} />
            </div>
          ))}
        </div>
        <Link href='/shop/soup'><ItemsButton btnText={"ORDER YOUR FAVORITE FOOD"} /></Link>
      </div>
      {/* menu soup end */}
    </div>
  );
};

export default Menu;
