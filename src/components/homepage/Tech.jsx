// // // import React from 'react'
// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import 'swiper/css';

// // // function Tech() {
// // //     const images =[
// // //         {id:1,}
// // //     ]
// // //   return (
// // //     <section className='bg-[#0010C2] pt-24'>
// // //         <div className="container  ">
// // //             <div className="flex flex-col items-center">
// // //                 <h3 className="font-roboto font-bold text-[75px] leading-[147%] text-white ">Our Tech Stack</h3>
// // //                     <div className=""></div>
// // //             </div>
// // //         </div>
// // //     </section>
// // //   )
// // // }

// // // export default Tech



// import React from 'react';
// import { A11y, Mousewheel, Keyboard } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import larvel from "../../assets/images/webp/techslider/laravel.png"
// import golang from "../../assets/images/webp/techslider/golang.webp"
// import java from "../../assets/images/webp/techslider/java.png"
// import javascript from "../../assets/images/webp/techslider/javascript.png"
// import laravelclone from "../../assets/images/webp/techslider/laravelclone.png"
// import node from "../../assets/images/webp/techslider/node.png"
// import php from "../../assets/images/webp/techslider/php.png"
// import ruby from "../../assets/images/webp/techslider/ruby.webp"
// import react from "../../assets/images/webp/techslider/react.png"

// // Replace with your real image paths
// const images = [
//     { id: 1, img: larvel },
//     { id: 2, img: golang },
//     { id: 3, img: java },
//     { id: 4, img: javascript },
//     { id: 5, img: laravelclone },
//     { id: 6, img: node },
//     { id: 7, img: php },
//     { id: 8, img: ruby },
//     { id: 9, img: react },
  
// ];

// function Tech() {
//   return (
//     <section className="bg-[#0010C2] pt-24">
//       <div className="container">
//         <div className="flex flex-col items-center">
//           <h3 className="font-roboto font-bold text-[75px] leading-[147%] text-white">
//             Our Tech Stack
//           </h3>

//           <div className="slide w-full mt-10">
//             <Swiper
//               modules={[A11y, Mousewheel, Keyboard]}
//               slidesPerView={9}
//               spaceBetween={30}
//               direction="horizontal"
//               loop={true}
//               loopedSlides={images.length}
//               freeMode={{
//                 enabled: true,
//                 momentum: true,
//                 momentumVelocityRatio: 1, // How strong scroll flick is
//                 momentumBounce: true,
//               }}
//               mousewheel={{
//                 forceToAxis: true,
//                 releaseOnEdges: false,
//                 sensitivity: 1, // feel free to increase for more velocity
//               }}
//               keyboard={{
//                 enabled: true,
//                 onlyInViewport: true,
//               }}
//               speed={500} // low speed, overridden by momentum
//             >
//               {images.map((item) => (
//                 <SwiperSlide key={item.id}>
//                   <img src={item.img} alt="" />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Tech;

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
  { id: 1, img: larvel },
  { id: 2, img: golang },
  { id: 3, img: java },
  { id: 4, img: javascript },
  { id: 5, img: laravelclone },
  { id: 6, img: node },
  { id: 7, img: php },
  { id: 8, img: ruby },
  { id: 9, img: react },
];

// Duplicate array to enhance loop visual
const loopedImages = [...images, ...images];

function Tech() {
  return (
    <section className="bg-[#0010C2] pt-24">
      <div className="container">
        <div className="flex flex-col items-center">
          <h3 className="font-roboto font-bold text-[75px] leading-[147%] text-white">
            Our Tech Stack
          </h3>

          <div className="slide w-full mt-10">
            <Swiper
              modules={[A11y, Autoplay, Keyboard]}
              slidesPerView={9}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2500} // faster seamless feel
              freeMode={true}
              grabCursor={true}
            >
              {loopedImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.img} alt={`Tech ${item.id}`} className="mx-auto" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
