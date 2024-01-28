'use image'
import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='w-1/4 border bg-white rounded-lg shadow-lg min-h-52 '> 
    <div>
      <Image
      src="/iceland.jpeg"
      width={200}
      height={200}
      alt="Picture of the author"
    />
    </div>
    <div>
        <p>
            Iceland
        </p>
    </div>
    </div>
  )
}

export default Card
