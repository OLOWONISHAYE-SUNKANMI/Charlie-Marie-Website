
import { Slide, Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

export default function Info() {
  return (
    <div className='container mx-auto mx-2 pt-30'>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        {/* Image Section - Visible on all screens */}
        <Fade direction='top-left'>
          <div className='w-full lg:w-auto mb-10 lg:mb-0 lg:py-5 lg:mr-10 flex justify-center'>
            <img 
              src='https://res.cloudinary.com/depeqzb6z/image/upload/v1755519411/Group_1_ss3zbz.png' 
              alt='info' 
              className='w-full max-w-md lg:m-20 lg:w-auto'
              style={{ maxHeight: '500px' }} // Adjust height as needed
            />
          </div>
        </Fade>
        
        {/* Content Section */}
        <Slide direction='down'>
          <div className='w-full lg:w-4/5'>
            <h1 className='font-extrabold font-poppins text-2xl lg:text-3xl text-[#620000]'>About the School</h1>
            <h2 className='mt-2 font-semibold font-poppins text-xl lg:text-2xl text-[#115237]'>Who We Are</h2>
            <p className='mt-5 lg:mt-10 text-sm lg:text-base mb-5'>
              Charlie Marie Group of School is dedicated to raising well-rounded learners equipped for the challenges of tomorrow. 
              We blend academic excellence with character development, preparing our students for success in life and beyond.
            </p>
            <h3 className='font-bold text-[#115237] mb-3 lg:mb-5'>OUR COMMITMENT</h3>
            <ul className='space-y-2 text-sm lg:text-base mb-10'>
              <li>Quality teaching with experienced educators</li>
              <li>Safe and supportive learning environment</li>
              <li>Integration of technology in education</li>
              <li>Strong moral and ethical values</li>
            </ul>
            <Link to= '/about'
              className='py-3 px-6 lg:p-5 border-1 mt-5 lg:mt-20 text-[#620000] border-[#620000] hover:bg-[#115237] hover:text-[#FFFFFF] hover:border-none transition-colors duration-300'>
              More about Us
            </Link>
          </div>
        </Slide>
      </div>
    </div>
  )
}