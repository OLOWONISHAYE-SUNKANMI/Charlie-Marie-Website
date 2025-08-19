
import { Slide, Fade } from 'react-awesome-reveal';

export default function Info() {
  return (
    <div className='container mx-auto pl-30 pt-10'>
      <div className='flex flex-col lg:flex-row justify-center items-center'>

        {/* Content Section */}
        <Slide direction='down'>
          <div className='w-full lg:w-full justify-center ml-20item-center'>
            <h1 className='font-extrabold font-poppins text-2xl lg:text-5xl text-[#620000] text-center'>Mission Statement</h1>
            <p className='mt-5 lg:mt-10 font-semibold lg:text-xl mb-5 text-center'>
              We are committed to buillding a brighter future for posterity. Education is our priority till all our Children are mature.
            </p>
          </div>

          <Fade direction='down'>
          <div className='w-full lg:w-auto mb-10 lg:mb-0 lg:py-5 lg:mr-5 flex justify-center ml-10'>
            <img 
              src='https://res.cloudinary.com/depeqzb6z/image/upload/v1755591414/undraw_education_3vwh-removebg-preview_rz4wn1.png ' 
              alt='info' 
              className='w-full max-w-md lg:m-20 lg:w-auto'
              style={{ maxHeight: '500px' }} // Adjust height as needed
            />
          </div>
        </Fade>

        </Slide>
      </div>
    </div>
  )
}