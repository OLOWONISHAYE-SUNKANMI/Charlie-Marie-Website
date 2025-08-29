// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function calltoAction() {
//   return (
//    <div className='justify-center items-center flex my-8 mx-25'>
//         <div className='my-5 justify-center items-center'>
//             <h3 className='my-6 font-extrabold text-4xl pr-20 text-[#620000]'>Admission going on Session 2025-26 Adacemic Session </h3>
//             <p className='text-[16px] my-3'>Click on the button to learn more about admission process</p>
//             <div className='py-10'>
//                 <Link to='/contact' className='bg-[#115237] px-10 py-5 my-6 text-[#ffffff] rounded-md shadow-md'>Call Us</Link>
//                 <Link to='/contact' className='bg-[#620000] px-10 py-5 m-6 text-[#ffffff] rounded-md shadow-md'>Message Us</Link>
//             </div>
//         </div>

//         <div className='justify-center item-center'>
//             <img src='https://res.cloudinary.com/depeqzb6z/image/upload/v1756185487/undraw_professor_d7zn-removebg-preview_wvludj.png' alt='img'/>
//         </div>
//    </div> 
//   )
// }
import React from 'react'
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center my-8 px-6 lg:px-20">
      
      {/* Left Side - Text */}
      <div className="my-5 text-center lg:text-left lg:pr-12">
        <h3 className="my-6 font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#620000]">
          Admission going on Session 2025-26 Academic Session
        </h3>
        <p className="text-[16px] my-3">
          Click on the button to learn more about admission process
        </p>
        
        <div className="py-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link 
            to="/contact" 
            className="bg-[#115237] px-8 py-4 text-white rounded-md shadow-md hover:opacity-90"
          >
            Call Us
          </Link>
          <Link 
            to="/contact" 
            className="bg-[#620000] px-8 py-4 text-white rounded-md shadow-md hover:opacity-90"
          >
            Message Us
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center items-center mb-8 lg:mb-0">
        <img 
          src="https://res.cloudinary.com/depeqzb6z/image/upload/v1756185487/undraw_professor_d7zn-removebg-preview_wvludj.png" 
          alt="Professor illustration" 
          className="w-full max-w-xs sm:max-w-sm lg:max-w-lg"
        />
      </div>
    </div>
  )
}
