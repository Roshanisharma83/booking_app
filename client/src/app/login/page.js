'use client'
import React, { Fragment } from 'react'
import { Button } from '@nextui-org/react';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className='my-36'>
      <Fragment>
      <div className='mt-5 w-80 border-solid m-auto m-0 '>
          <div className='grid grid-rows-2 gap-3'>
          <Button className='bg-tw-blue text-white'>
            <span className=' border-white'>
            <FaFacebookF />
            </span>
            <p>LOG IN WITH FACEBOOK</p>
            </Button>
          <Button className='bg-tw-red text-white'>
          <FaGoogle />
          <p>LOG IN WITH GOOGLE</p>
          </Button>
          </div>
          
        </div>
        <div className='mx-6 lg:mx-12 my-1'>
            <h1 className="text-2xl font-bold  text-gray-800 w-80 mt-4 m-auto m-0">
            Log in with emai
        </h1>
        <form>
            <div className='mt-6 w-80 border-solid m-auto m-0'>
                <input 
                  className='my-6 pl-4 block w-full rounded-md border text-blueGray-600 p-2 text-md'
                  type='text' 
                  placeholder='Email address/Username'
                /> 
                <input 
                  className='my-6 pl-4 block w-full rounded-md border text-blueGray-600 p-2 text-md'
                  type='password' 
                  placeholder='Password'
                /> 
                <p>Forgot Password?</p>
                 <button className='bg-blue-800 text-white rounded-md px-4 py-2 border-solid w-80 mt-4'>Login</button> 
            </div>
        </form>
       </div>
      </Fragment>
    </div>
  )
}

export default Login
