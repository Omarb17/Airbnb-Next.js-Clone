import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-75 sm:h-100 lg:h-125 xl:h-150 2xl:h-155'><Image src="/banner.webp" layout='fill' objectFit='cover' alt='AirbnbLogo'/>
    <div  className='absolute top-1/2 w-full text-center'> 

        <p className='text-sm sm:text-2xl text-red-100 font-weight-800 '>Discover one of the largest marketplace for unique, authentic places to stay.</p>
 <button className='text-red-400 bg-red-100 px-10 py-4 shadow-md rounded-full font-bold my-3 cursor-pointer hover:shadow-xl active:scale-90 transation duration-150'>Browse Now</button>
    </div>
    </div>
  )
}

export default Banner