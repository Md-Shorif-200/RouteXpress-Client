import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../../../index.css';

// import required modules
import { Navigation } from 'swiper/modules';
import BannerContent from './BannerContent';

import img_1 from '../../../assets/banner-img/slide-1.jpg'
import img_2 from '../../../assets/banner-img/slide-2.jpg'


export default function Banner_slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
              <BannerContent img={img_2} title={'we are expertise in global courier'}  description={'We specialize in secure and efficient global courier services, delivering your packages across borders with speed and reliability'} ></BannerContent>
        </SwiperSlide>

          <SwiperSlide>
              <BannerContent img ={img_1} title={'best solutions for delivery services'}  description={'Our tailored delivery solutions are designed to meet your business and personal shipping needs, ensuring smooth and timely service every time'}></BannerContent>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}




