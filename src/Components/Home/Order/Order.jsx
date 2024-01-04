"use client"
import HeaderButton from '@/Components/Button/HeaderButton';
import React from 'react';
import "./order.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from "@/assets/home/slide1.jpg";
import slide2 from "@/assets/home/slide2.jpg";
import slide3 from "@/assets/home/slide3.jpg";
import slide4 from "@/assets/home/slide4.jpg";
import slide5 from "@/assets/home/slide5.jpg";
import Image from 'next/image';

const Order = () => {
    return (
        <div className='mt-10'>
            <HeaderButton subheader={'From 11:00am to 10:00pm'} header={'ORDER ONLINE'}></HeaderButton>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src={slide1} height="auto" width="auto" alt='slider image' />
        </SwiperSlide>
        <SwiperSlide> <Image src={slide2} height="auto" width="auto" alt='slider image' /></SwiperSlide>
        <SwiperSlide> <Image src={slide3} height="auto" width="auto" alt='slider image' /></SwiperSlide>
        <SwiperSlide> <Image src={slide4} height="auto" width="auto" alt='slider image' /></SwiperSlide>
        <SwiperSlide> <Image src={slide5} height="auto" width="auto" alt='slider image' /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Order;