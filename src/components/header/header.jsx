import React from 'react'
import { IoIosCall } from "react-icons/io";

export default function header() {
  return (
    <>
        <div className= 'w-full bg-[#620000] h-10 flex  justify-between'>
            <div className='item-center justify-between ml-40 flex my-2'>
              <IoIosCall style={{ color: '#ffffff', margin: 5, }}/>
              <p className=' font-sm text-white font-semibold font-poppins'>+ 234 8158896523</p>
            </div>
        </div>
    </>
  )
}
