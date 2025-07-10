import React from 'react'
import { Comma } from '../common/Icon'
import bepartimg1 from '../../assets/images/webp/bepartimg1.webp'
import bepartimg2 from '../../assets/images/webp/bepartimg2.webp'
import bepartimg3 from '../../assets/images/webp/bepartimg3.webp'

const BePartOf = () => {
  return (
    <>
      <div className='container'>
        <div>
          <div className='flex items-center gap-1'>
            <Comma />
            <Comma />
          </div>
          <h2 className='font-young font-normal text-5xl lg:max-w-[808px] w-full max-lg:text-center pt-[23px]'>Be Part of a Dynamic and Innovative Team Driving Results.</h2>
        </div>
        <div className='flex flex-wrap flex-row -mx-3 items-center'>
          <div className='xl:w-1/2 px-3 w-full lg:w-5/12'>
            <h2 className='font-poppins font-medium text-2xl lg:max-w-[455px] w-full text-yellow-orange max-lg:text-center'>Be part of a dynamic and innovative team driving results.</h2>
            <p className='lg:max-w-[552px] w-full text-base max-lg:text-center font-poppins text-[#050000] mt-2'>At Tenc Coding Campus, we believe in the power of collaboration, creativity, and cutting-edge technology. Join a team of passionate developers, designers, and digital experts committed to building impactful solutions that deliver measurable success. Whether you're solving complex problems or shaping user experiences, you'll be part of a culture that values growth, innovation, and excellence.</p>
          </div>
          <div className='xl:w-1/2 px-3 w-full max-lg:flex max-lg:justify-center max-lg:items-center lg:w-7/12'>
            <div className='flex items-center gap-[21px] mt-2 max-lg:flex-row'>
              <div className='flex flex-col'>
                <img src={bepartimg1} alt="" className='max-w-[92px] min-h-[131px] mt-2' />
                <img src={bepartimg2} alt="" className='max-w-[92px] min-h-[131px] mt-[14px]' />
              </div>
              <img src={bepartimg3} alt="" className='max-w-[441px] min-h-[264px] mt-2 border-[7px] rounded-[24px] border-medium-blue' />
            </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default BePartOf