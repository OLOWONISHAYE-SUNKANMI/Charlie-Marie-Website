import React from 'react'
import { Slide, Fade } from 'react-awesome-reveal';

export default function info() {
  return (
    <>
    <div className='flex justify-center ml-30 py-5'>
      <Fade direction='top-left'>
          <div className='py-5 mr-10'>
          <img src='/images/info.png' alt='info' className='w-full m-20'/>
      </div>
      </Fade>
        
      <Slide direction='right'>
         <div className='ml-30'>
          <h1 className='mt-20 font-extrabold ml-font-poppins text-3xl text-[#620000] '>About the School</h1>
          <h2 className='mt-2 font-semibold font-poppins text-2xl text-[#115237]'>Who We Are</h2>
          <p className='pr-20 mt-10 text-[16px] mb-5 mr-20'>Charlie Marie Group of School is dedicated to raising well-rounded learners equipped for the challenges of tomorrow. 
             We blend academic excellence with character development, preparing our students for success in life and beyond.</p>
          <h3 className='font-bold text-[#115237] mb-5'>OUR COMMITMENT</h3>
          <li className='text-[16px]'>Quality teaching with experienced educators</li>
          <li className='text-[16px]'>Safe and supportive learning environment</li>
          <li className='text-[16px]'>Integration of technology in education</li>
          <li className='text-[16px]'>Strong moral and ethical values</li>
          <button className='p-5 border-1 mt-10 text-[#620000] border-[#620000] hover:bg-[#115237] hover:text-[#FFFFFF] hover:border-none '>More about Us</button>
      </div>
    
      </Slide>
     </div>
      
    </>
  )
}
