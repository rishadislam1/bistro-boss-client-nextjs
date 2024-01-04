"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "@/assets/home/01.jpg";
import img2 from "@/assets/home/02.jpg";
import img3 from "@/assets/home/03.png";
import img4 from "@/assets/home/04.jpg";
import img5 from "@/assets/home/05.png";
import img6 from "@/assets/home/06.png";
import Image from "next/image";

const HomeHeader = () => {
  return (
 
      <Carousel showThumbs={false}>
        <div>
          <Image src={img1} alt="headerimage" width='500'  height='100px'  />
        </div>

        <div>
          <Image src={img2} alt="headerimage" width='500'  height='100px'  />
        </div>

        <div>
          <Image src={img3} alt="headerimage" width='500'  height='100px'  />
        </div>

        <div>
          <Image src={img4} alt="headerimage" width='500'  height='100px'  />
        </div>

        <div>
          <Image src={img5} alt="headerimage" width='500'  height='100px'  />
        </div>

        <div>
          <Image src={img6} alt="headerimage" width='500'  height='100px'  />
        </div>

       
      </Carousel>
 
  );
};

export default HomeHeader;
