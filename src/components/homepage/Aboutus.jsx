import React from 'react'
import aboutus from '../../assets/images/webp/homeabout.webp'
import { Backbottle, Bluebocx, Dottedcircle } from '../common/Icon'
import Button from '../common/Button'
function Aboutus() {
  return (
    <>
        <div className="container">
            <div className="flex flex-col lg:flex-row w-full lg:pt-[100px] lg:pb-[180px] relative">
              <div className="absolute top-10 right-70 -z-10"><Backbottle/></div>/
                    <div className="w-full lg:w-6/12 ">
                    <div className="relative  max-w-[323px]">
                        <img src={aboutus} alt="About Us"  className="w-full h-auto  " />
                        <div className="absolute -top-14 left-[-10%]  -z-10"><Dottedcircle/></div>
                        <div className="absolute -z-10 -bottom-3 -right-3"><Bluebocx/></div>
                        </div>
                    </div>
                 <div className="w-full lg:w-6/12 ">
                    <h3 className="font-young text-5xl leading-[160%]">About us</h3>
                    <p className="font-poppins text-2xl leading-[160%] font-semibold text-yellow-orange">Trusted Partner for Comprehensive Marketing and IT Services</p>
                    <p className="font-poppins leading-[160%] text-xl pb-[27px]">Tenc Coding Campus is a leading digital solutions company offering services in digital marketing, app development, UI/UX design, and full-stack development. We help businesses grow by creating impactful digital experiences, tailored strategies, and innovative technology solutions that drive real results.</p>
                    <Button/>
                 </div>
            </div>
        </div> 
    </>
  )
}

export default Aboutus