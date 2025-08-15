import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <>
      <div className='w-full h-[65vh] justify-center items-center bg-[#620000] '>
        <div className='logo flex flex-col items-center justify-center '>
          <img src='https://res.cloudinary.com/depeqzb6z/image/upload/v1755201313/logo_rarwwq.png' alt='logo' className='w-15 h-15 items-center justify-center mt-15'/>
          <h3 className='text-center mt-5 font-extrabold text-5xl text-[#115237]'>Charlie Marie Group of Schools</h3>
          <p className='mt-5 text-white text-xl'>We're committed to bulding to building a brighter future for prosterity</p>
        </div>

        <div className='links'>
          <ul className='flex justify-center items-center m-15 '>
              <li className='m-5 text-[#ffffff]'>Home</li>
              <li className='m-5 text-[#ffffff]'>About</li>
              <li className='m-5 text-[#ffffff]'>Gallery</li>
              <li className='m-5 text-[#ffffff]'>Student's Portal</li>
              <li className='m-5 text-[#ffffff]'>Contact</li>
          </ul>
        </div>

          <div className='justify-center items-center flex bg-[#115237] w-[100%]'>
            <p className='text-white '> Copyright 2025 @ All right reserved - Charlie Marie Group of School </p>
          </div>
      </div>
    </>
  )
}
