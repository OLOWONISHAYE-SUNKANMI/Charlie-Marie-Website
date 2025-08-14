import React from 'react'
import './hero.css'

export default function hero() {
  return (
     <div className="hero">
      <div className="hero-container write-up py-[5rem] px-[5rem] text-center">
        <h3 className="text-3xl font-bold text-white mb-7">Welcome to</h3>
        <p className="font-extrabold text-[#115237] text-5xl">
          Charlie Marie Group of School
        </p>
        <br/>
        <p className="write-up text-[#620000] text-lg font-bold mt-3 text-center">
         GOVT. AND WAEC APPROVED
        </p>

          <p className="write-up text-[#FFFFFF] text-lg font-bold mt-3 text-center">
         ...catch them young to bulding a brighter future
        </p>
      </div>

      <div className='flex justify-center align-center py-[2rem] gap-6 '>
          <div className='p-5 bg-[red] rounded-lg'>
              <h3 className='text-white font-semibold font-poppins text-[15px]'>PRE-SCHOOL</h3>
          </div>

          <div className='p-5 bg-[green] rounded-lg'>
              <h3 className='text-white font-semibold font-poppins text-[16px]'>NURSERY SCHOOL</h3>
          </div>

          <div className='p-5 bg-[yellow] rounded-lg'>
              <h3 className='text-white font-semibold font-poppins text-[16px]'>PRIMARY SCHOOL</h3>
          </div>

          <div className='p-5 bg-[brown] rounded-lg'>
              <h3 className='text-white font-semibold font-poppins text-[16px]'>SECONDARY SCHOOL</h3>
          </div>

          <div className='p-5 bg-[blue] rounded-lg'>
              <h3 className='text-white font-semibold font-poppins text-[16px]'>VOCATIONAL SCHOOL</h3>
          </div>

          <div className='p-5 bg-[orange] rounded-lg'>
              <h3 className='text-white font-semibold font-poppins text-[16px]'>SPORT ACADEMY</h3>
          </div>

          
      </div>
    </div>
  )
}
