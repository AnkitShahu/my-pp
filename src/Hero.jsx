import React from 'react'
import ankit from '../public/ankit.jpg'

function Hero() {
  return (
    <>
    <div className='h-screen'>
    <div style={{clipPath: "polygon(100% 0, 0 0, 0 100%)"}} className='absolute z-0 w-11/12 h-5/6 bg-black'></div>
    <div className='flex justify-center mt-8' >
        <img className="rounded-full w-96 h-96 max-w-lg transition-all object-cover duration-300 cursor-pointer filter grayscale-0 hover:grayscale" src={ankit} alt="image description" />
    </div>
    </div>
    </>
  )
}

export default Hero