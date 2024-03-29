'use client'
import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Chitwen = () => {
  return (
    
      <div className="w-1/4 border bg-white rounded-lg shadow-lg min-h-52 my-4">
        <div>
          <Link href="#">
            <Image
              className="p-4"
              src="/chitwan.jpeg"
              width={350}
              height={300}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="px-4">
          <p>Nepal</p>
          <span>dff</span>
        </div>
      </div>
    );
}


export default Chitwen
