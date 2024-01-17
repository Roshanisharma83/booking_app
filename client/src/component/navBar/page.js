'use client'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button} from "@nextui-org/react";

const Nav = () => {
  return (
    <div className='bg-blue-950'>
<Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <img src='./logo.png' width={50}/>
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          //startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Link href='./login'color='#0000' className='bottom-1'>login</Link>
        <Link href='./register' color='#0000'>Register</Link>
        
      </NavbarContent>
    </Navbar>
    </div>
      
  )
}

export default Nav
