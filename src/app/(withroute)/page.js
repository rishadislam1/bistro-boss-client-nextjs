import Bistro from "@/Components/Home/Bistro/Bistro";
import CallUs from "@/Components/Home/CallUs/CallUs";
import Chef from "@/Components/Home/Chef/Chef";
import FromMenu from "@/Components/Home/FromMenu/FromMenu";
import HomeHeader from "@/Components/Home/Header/HomeHeader";
import Menu from "@/Components/Home/Menu/Menu";
import Order from "@/Components/Home/Order/Order";


const HomePage = ()=> {
  return (
  <>
  <HomeHeader/>
  <Order/>
  <Bistro/>
  <Menu/>
  <CallUs/>
  <Chef/>
  <FromMenu/>
  </>
  )
}

export default HomePage;
