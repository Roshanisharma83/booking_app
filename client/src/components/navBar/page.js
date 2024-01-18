'use client'
import React from 'react'
import Link from 'next/link'
import {Navbar, NavbarBrand, NavbarContent, Input,} from "@nextui-org/react";
import { Container } from 'postcss';

const Nav = () => {
  return (
    <nav className='bg-tw-blue w-full px-10 flex'>
      <div className=' w-full flex flex-col-3'>
        <div className="mr-4 w-1/4 mt-4">
          <img src='./logo.png' width={80}/>
        </div>
        <div className='w-3/4 flex '>
          <ul className='flex p-4 '>
            <li className='p-4 cursor-pointer text-white list-none'><a>Stays</a></li>
            <li className='p-4 cursor-pointer text-white list-none'><Link href=''>Destination</Link></li>
            <li className='p-4 cursor-pointer text-white list-none'><a>Flights</a></li>
            <li className='p-4 cursor-pointer text-white list-none'><a>Attractions</a></li>
          </ul>
      
          <div className="items-center m-auto">
            <Link href='./login' type='button'className='hover:bg-tw-blue text-white mr-4 py-2 px-4   border border-white rounded-lg'>Login</Link>
            <Link href='./register' type='button' className='hover:bg-tw-blue text-white py-2 px-4 border border-white rounded-lg' >Register</Link> 
          </div>
        </div>
      </div>
    </nav>
      
  )
}

export default Nav
