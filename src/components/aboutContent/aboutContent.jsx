import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function aboutContent() {
  return (
    <div className='w-full h-[100vh]'>
        <Fade direction='down' triggerOnce>
            <div className='flex py-4 px-8 '>

            <div className='justify-center items-center'>
                <h3 className='p-5 bg-[#620000] text-white text-center w-98  mx-10 my-10 font-extrabold text-2xl'>
                    MISSION STATEMENT
                </h3>
                <p className='text-bold text-xl p-10'>
                    We are committed to building a brighter future for prosperity. Education is our priority till all our Children are mature
                </p>
            </div>

             <div className='justify-center items-center'>
                <h3 className='p-5 bg-[#620000] text-white text-center mx-10 my-10 font-extrabold text-2xl'>
                    OUR AIMS AND OBJECTIVES
                </h3>
                <p>
                    We are committed to building a brighter future for prosperity. Education is our priority till all our Children are mature
                </p>
            </div>

            </div>
            
        </Fade>
    </div>
  )
}
