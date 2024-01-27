import React from 'react'
import { FcPhone } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#413f40] w-full flex'>
      <div className='grid lg:grid-cols-2 2xl:grid-cols-3 text-white font-bold w-full p-5 gap-4'>
        <div className='flex border-r'>
          <div className='w-full lg:w-3/4 mx-3 lg:mx-auto flex flex-col'>
            <p className='text-lg 2xl:text-3xl mt-5'>Contact Us</p>
            <div className='w-full lg:w-3/4 mx-2 lg:mx-auto mt-5'>
              <p className='text-sm 2xl:text-xl my-auto flex'><FcPhone  className='text-sm 2xl:text-xl my-auto -rotate-90 mx-2' /> +91 98430 52580</p>
              <p className='text-sm 2xl:text-xl my-auto flex mt-5'><FcComments className='text-sm 2xl:text-xl my-auto mx-2' /> palluyirkalam@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='flex 2xl:border-r'>
          <div className='w-full lg:w-3/4  mx-auto flex flex-col justify-center'>
            <p className='text-lg 2xl:text-3xl mt-5'>Quick Links</p>
            <div className='w-full lg:w-3/4 mx-2 lg:mx-auto mt-5 grid grid-cols-1 2xl:grid-cols-2'>
              <Link to='/' className='text-sm 2xl:text-xl hover:underline'>Home</Link>
              <Link to='/aboutus' className='text-sm 2xl:text-xl hover:underline'>About Us</Link>
              <Link to='/services' className='text-sm 2xl:text-xl hover:underline'>Services</Link>
              <Link to='/products' className='text-sm 2xl:text-xl hover:underline'>Products</Link>
            </div>
          </div>
        </div>

        <div className='flex col-span-2 2xl:col-span-1 border-t 2xl:border-none'>
          <div className='w-full lg:w-3/4 mx-3 lg:mx-auto flex flex-col'>
            <p className='text-lg 2xl:text-3xl mt-5'>Follow Us</p>
            <div className='w-full lg:w-3/4 mx-2 lg:mx-auto my-5 flex justify-between'>
              <BsFacebook  className='text-lg 2xl:text-xl my-auto mx-2' />
              <BsInstagram className='text-lg 2xl:text-xl my-auto mx-2' />
              <BsWhatsapp  className='text-lg 2xl:text-xl my-auto mx-2' />
              <BsYoutube  className='text-lg 2xl:text-xl my-auto mx-2' />
              <BsLinkedin  className='text-lg 2xl:text-xl my-auto mx-2' />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer