import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <>
        <div className= 'w-full bg-[#620000] h-10 flex  justify-between'>
            <div className='item-center justify-between ml-40 flex my-2 '>
              <IoIosCall style={{ color: '#ffffff', margin: 5, }}/>
              <p className='font-sm text-white font-semibold font-poppins border-r-2 border-white pr-3'>+ 234 8158896523</p>
             
              <IoMdMail style={{ color: '#ffffff', margin: 5, }} /> 
               <p className='font-sm text-white font-semibold font-poppins'>hello@gmail.com</p>
            </div>

          <div className='item-center justify-between flex my-2 mr-25'>
            <FaTwitter style={{ color: '#ffffff', margin: 5, }} />
            <IoLogoInstagram style={{ color: '#ffffff', margin: 5, }} />
            <FaFacebook  style={{ color: '#ffffff', margin: 5, }} />

             <Link to="/" className="flex items-center my-2 mx-4">
          <MdAccountCircle  style={{ color: '#ffffff', margin: 5, }} />
          <span className="text-white font-semibold font-poppins">Login</span>
        </Link>
          </div>
         
       
        </div>
    </>
  )
}
