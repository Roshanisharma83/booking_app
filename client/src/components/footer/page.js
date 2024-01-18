import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div className='pt-6 bg-tw-blue text-white'>
      <div className='flex flex-col md:flex-row gap-3 md:gap-12 w-11/12 mx-auto'>
        <div className="flex-initial md:w-4/12 ">
          <h1 className='text-xl mb-4'>Travel the World</h1>
          <p>Travel with world.com is part of Booking Holdings company., it's give you in online travel and related services.</p>
          <div className='mt-4 flex flex-row gap-6'>
            <p><FaFacebookF /></p>
            <p><BsTwitterX /></p>
            <p><IoLogoInstagram /></p>

          </div>
        </div>
        <div className='flex-initial md:w-2/12 font-light'>
          <h1>Link</h1>
          <div className='mt-4 text-sm grid grid-rows-1 gap-2 '>
            <div className='mb-1'>
              <a href='#'>About Us</a>
            </div>
            <div className='mb-1'>
              <a href='#'>Contact Us</a>
            </div>
            <div className='mb-1'>
              <a href='#'>How to</a>
            </div>
          </div>
        </div>
        <div className='flex-initial md:w-2/12'>
          <h1>Resource</h1>
          <div className='mt-4 text-sm  font-light grid grid-rows-1 gap-2 '></div>
            <div className='mb-1'>
                <p>Terms of Use</p>
            </div>
        </div>
      </div>
      <div className="bg-tw-blue pt-2 pb-2 mt-8 sm:mt-4 border-t border-slate-700 ">
        <div className="w-11/12 mx-auto  text-white text-xs font-light ">
          <span className="float-left">
            &copy; 2023 - {new Date().getFullYear()} Travel the world pvt. Ltd.All
            rights reserved. 
          </span>
          
          <div className="clear-both"></div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
