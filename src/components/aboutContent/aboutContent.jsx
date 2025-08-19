
import { Slide, Fade } from 'react-awesome-reveal';

export default function Info() {
  return (
    <div className='container mx-auto px-2 pt-10'>
      <div className='flex flex-col lg:flex-row justify-center items-center'>

           {/* Image Section - Visible on all screens */}
        <Fade direction='top-left'>
          <div className='w-full lg:w-auto mb-10 lg:mb-0 lg:py-5 lg:mr-10 flex justify-center'>
            <img 
              src='https://res.cloudinary.com/depeqzb6z/image/upload/v1755517513/IMG-20250812-WA0075_lz4tay.jpg' 
              alt='info' 
              className='w-full max-w-md lg:m-20 lg:w-auto shadow-md'
              style={{ maxHeight: '500px' }} // Adjust height as needed
            />
          </div>
        </Fade>
     
        {/* Content Section */}
        <Slide direction='down'>
          <div className='w-full lg:w-4/5'>
            <h1 className='font-extrabold font-poppins text-2xl lg:text-3xl text-[#620000] text-center'>Mission Statement</h1>
            <p className='mt-5 lg:mt-10 text-sm lg:text-base mb-5 text-center'>
              We are committed to buillding a brighter future for posterity. Education is our priority till all our Children are mature.
            </p>

             <h1 className='font-extrabold font-poppins text-2xl lg:text-3xl text-[#115237] text-center'>Our Aims and Objectives</h1>
            <ul className='mt-5 mb-5'>
                <li className='mt-5 lg:mt-10 text-sm lg:text-base mb-5 '>1. We aim to provide adequate care and supervision for our children from very tender ages.</li>
                <li className='mt-5 lg:mt-10 text-sm lg:text-base mb-5 '>2. We aim to give our children sound knowledge and prepare them for advanced education in later years by paying them individual attention.</li>
                <li className='mt-5 lg:mt-10 text-sm lg:text-base mb-5 '>3.  We shall encourage the child's social development through interaction with other children.</li>
                <li className='mt-5 lg:mt-10 text-sm lg:text-base mb-5 '>4. We shall ensure that all our children are well prepared for higher education with ease and confidence to achieve excellence and greatness.</li>
                <li className='mt-5 lg:mt-10 text-sm lg:text-base mb-5 '>5. We are resolved to produce well educated. well behaved, and honest boys and girls for the future.</li>
                <p className='mt-5 lg:mt-10 text-sm lg:text-base mb-5 '>So help us God. Amen</p>
            </ul>
          </div>

        </Slide>
      </div>
    </div>
  )
}