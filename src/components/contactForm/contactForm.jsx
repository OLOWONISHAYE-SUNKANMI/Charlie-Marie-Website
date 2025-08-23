import React from 'react'

export default function contactForm() {
  return (
    <div className=' flex m-10 justify-between items-center' >
        <div className='my-5 mx-20'>
            <h4 className='font-poppins text-2xl font-extrabold text-[#115237]'>#Contact</h4>
            <h2 className='font-extrabold text-5xl font-poppins text-[#620000]'>Get in touch with us</h2>

          <div className='form my-10 flex items-center justify-center '>
             <form className='mb-8 max-w-md'>
                <input 
                placeholder='Name'
                type='text'
                name='name'
                required
                className=''
                />

                <input 
                placeholder='Phone No'
                type='number'
                name='number'
                required
                />

                <input 
                placeholder='Type Email Address'
                required
                type='email'
                name='email'
                />

                <input 
                placeholder='Subject'
                required
                type='text'
                name='text'
                />

                <textarea 
                placeholder='Write message here'
                required
                type='text'
                name='text'
                />

                <button>SEND MESSAGE</button>

             </form>
          </div>
        </div>

       
        <div className='p-5 bg-[#ffffff] shadow-md w-60 h-120 rounded mr-20   '>
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
