import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full h-48 mb-14'>
      
      <Image
      src="/background.webp"
      width={1600}
      height={0}
      style={"background:cover"}
      alt="image"
    />
    </div>
   
        // <video width="920" height="240" controls autoplay>
        //   <source src="./video.mp4" type="video/mp4" />
        //   <track
        //     src="./video.mp4"
        //     srclang="en"
        //     label="English"
        //   />
          
        // </video>
  )
}

export default Header
