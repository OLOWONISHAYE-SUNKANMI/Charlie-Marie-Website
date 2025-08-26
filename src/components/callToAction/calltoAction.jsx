import React from 'react'

export default function calltoAction() {
  return (
   <div className='justify-center items-center flex my-8 mx-25'>
        <div className='my-5 justify-center items-center'>
            <h3 className='my-6 font-extrabold text-4xl pr-20 text-[#620000]'>Admission going on Session 2025-26 Adacemic Session </h3>
            <p className='text-[16px] my-3'>Click on the button to learn more about admission process</p>
            <div>
                <button className='bg-[#115237] w-50 h-20 my-6 text-[#ffffff] rounded-md shadow-md'>Call Us</button>
                <button className='bg-[#620000] w-50 h-20 m-6 text-[#ffffff] rounded-md shadow-md'>Message Us</button>
            </div>
        </div>

        <div className='justify-center item-center'>
            <img src='https://res.cloudinary.com/depeqzb6z/image/upload/v1756185487/undraw_professor_d7zn-removebg-preview_wvludj.png' alt='img'/>
        </div>
   </div> 
  )
}
