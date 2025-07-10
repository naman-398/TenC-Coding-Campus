

import React from 'react';
import { A11y, Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import larvel from "../../assets/images/webp/techslider/laravel.png";
import golang from "../../assets/images/webp/techslider/golang.webp";
import java from "../../assets/images/webp/techslider/java.png";
import javascript from "../../assets/images/webp/techslider/javascript.png";
import laravelclone from "../../assets/images/webp/techslider/laravelclone.png";
import node from "../../assets/images/webp/techslider/node.png";
import php from "../../assets/images/webp/techslider/php.png";
import ruby from "../../assets/images/webp/techslider/ruby.webp";
import react from "../../assets/images/webp/techslider/react.png";

const images = [
  { id: 1, img: larvel,name:"larvel" },
  { id: 2, img: golang , name:"golang"},
  { id: 3, img: java , name:"java"},
  { id: 4, img: javascript , name:"javascript"},
  { id: 5, img: laravelclone , name:"laravel"},
  { id: 6, img: node , name:"node"},
  { id: 7, img: php , name:"php"},
  { id: 8, img: ruby , name:"ruby"},
  { id: 9, img: react , name:"react"},
];

const loopedImages = [...images, ...images];

function Tech() {
  return (
    <section className="bg-[#0010C2] pt-24">
      <div className="container">
        <div className="flex flex-col items-center">
          <h3 className="font-roboto font-bold text-[75px] leading-[147%] text-white">
            Our Tech Stack
          </h3>

          <div className="slide w-full lg:pt-[90px]">
            <Swiper
              modules={[A11y, Autoplay, Keyboard]}
              slidesPerView={9}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2500} 
              freeMode={true}
              grabCursor={true}
            >
              {loopedImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.img} alt={`Tech ${item.id}`} className="mx-auto" />
                  <p className="font-roboto text-white font-bold text-base text-center leading-[147%] uppercase pt-1" >{item.name}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      
<div className="lg:pt-[91px] lg:pb-[170px]">
  <h6 className="custom-underline font-bold font-roboto leading-[147%] text-[20px] text-white inline-block relative after:absolute after:h-[2px] after:w-[70%] after:bg-white after:left-[4%] after:bottom-0">
    Explore All Technologies
  </h6>
</div>

        </div>
      </div>
    </section>
  );
}

export default Tech;
