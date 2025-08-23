import React from 'react'
import { Slide, Fade} from 'react-awesome-reveal';

export default function visionStatement() {
  return (
            <div className='container mx-auto pt-10'>
              <div className='flex flex-col lg:flex-row justify-center items-center'>

                <Fade direction='down'>
                  <div className='w-full lg:w-auto mb-10 lg:mb-0 lg:py-5 lg:mr-5 flex justify-center '>
                    <img 
                      src='https://res.cloudinary.com/depeqzb6z/image/upload/v1755591415/undraw_studying_n5uj-removebg-preview_ox2t1z.png' 
                      alt='info' 
                      className='w-full max-w-md lg:m-20 lg:w-auto'
                      style={{ maxHeight: '500px' }} // Adjust height as needed
                    />
                  </div>
                </Fade>
        
                {/* Content Section */}
                <Slide direction='down'>
                  <div className='w-full lg:w-full justify-center mr-20 item-center'>
                    <h1 className='font-extrabold font-poppins text-2xl lg:text-2xl text-[#620000]'>Aims and Objectives</h1>
                    <ul className='item-left mr-20'> 
                        <li className='py-5 font-semibold font-poppins text-sm'>We aim to provide adequate care and superviion for our children from very tender ages.</li>
                        <li className='py-5 font-semibold font-poppins text-sm'>We aim to give our children sound knowledge and prepare them for advanced education in later years by paying them individual attention.</li>
                        <li className='py-5 font-semibold font-poppins text-sm'>We shall encourage the child's social development through interaction with other children.</li>
                        <li className='py-5  font-semibold font-poppins text-sm'>We shall ensure that all our children are well prepared for higher education with ease and confidence to achieve excellence and greatness.</li>
                        <li className='py-5  font-semibold font-poppins text-sm'>We are resolved to produce well educated, well behaved and honest boys and girls for the future.</li>
                        <li className='py-5  font-semibold font-poppins text-sm'>So help us God, Amen</li>
                    </ul>
                  </div>
        
         
        
                </Slide>
              </div>
            </div>
  )
}
