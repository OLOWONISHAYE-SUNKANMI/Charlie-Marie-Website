import React from 'react'

export default function contactForm() {
  return (
    <div className=' flex m-5 justify-between items-center' >
        <div className='my-5 mx-20'>
            <h4 className='font-poppins text-2xl font-extrabold text-[#115237]'>#Contact</h4>
            <h2 className='font-extrabold text-5xl font-poppins text-[#620000]'>Get in touch with us</h2>

          <div className='form my-10 flex items-center justify-center '>
             <form className='mb-8'>

                <input 
                placeholder='Name'
                type='text'
                name='name'
                required
                className='bg-[#d3d3d3] w-2/5 mr-5  hover:border hover:border-gray-600 h-13  px-4 py-2 rounded'
                />
    
               
           
                <input 
                placeholder='Phone No'
                type='text'
                name='number'
                required
                className='bg-[#d3d3d3] w-2/5 mr-5 mb-5  hover:border hover:border-gray-600 h-13 px-4 py-2 rounded'
                />
         
               

                <input 
                placeholder='Type Email Address'
                required
                type='email'
                name='email'
                className='bg-[#d3d3d3] w-2/5 mr-5 mb-5  hover:border hover:border-gray-600 h-13 px-4 py-2 rounded'
                />

                <input 
                placeholder='Subject'
                required
                type='text'
                name='text'
                className='bg-[#d3d3d3] w-2/5 mr-5 mb-5  hover:border hover:border-gray-600 h-13 px-4 py-2 rounded'
                />

                <textarea 
                placeholder='Write message here'
                required
                type='text'
                name='text'
                className='bg-[#d3d3d3] w-173 mr-5 mb-5  hover:border hover:border-gray-600 h-60 px-4 py-2 rounded'
                />

              <div className='button w-full justify-center items-center'>
                  <button className='text-center bg-[#620000] text-[#ffffff] p-5 rounded w-173 hover:bg-[#115237]'>Send Message</button>
              </div>

             </form>
          </div>
        </div>

       
        <div className='p-5 bg-[#ffffff] shadow-md w-60 h-130 rounded mr-20   '>
            <p className='my-10 font-bold font-poppins text-[#115237]'>Information</p>
           <div className='py-5'>
                <p className='font-poppins font-bold text-[16px]'>Email Address</p>
                <p className='font-poppins text-xs pr-10'>info@charliemariegroupofschools.com</p>
           </div>
           <div className='py-5'>
                <p className='font-poppins font-bold text-sm'>Phone Number</p>
                <p className='font-poppins text-xs pr-10'>+ 234 588966523 </p>
           </div>

            <div className='py-5'>
                <p className='font-poppins font-bold text-sm'>Address</p>
                <p className='font-poppins text-xs pr-10'>Grace Estate, Adeyeye Street, Labori Oloja, Likosi, Sagamu LGA, Ogun State </p>
           </div>
        </div>
    </div>
  )
}
