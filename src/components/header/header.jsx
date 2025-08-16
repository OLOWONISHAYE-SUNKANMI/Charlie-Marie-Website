import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-[#620000] py-2 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Contact Info - Left Side */}
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <div className="flex items-center">
            <IoIosCall className="text-white text-sm md:text-base" />
            <a 
              href="tel:+2348158896523" 
              className="text-white text-xs sm:text-sm font-semibold font-poppins hover:text-[#115237] ml-1 transition-colors"
            >
              +234 8158896523
            </a>
          </div>
          
          <div className="hidden sm:flex items-center border-l-2 border-white pl-4">
            <IoMdMail className="text-white text-sm md:text-base" />
            <a 
              href="mailto:hello@gmail.com" 
              className="text-white text-xs sm:text-sm font-semibold font-poppins hover:text-[#115237] ml-1 transition-colors"
            >
              hello@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links and Login - Right Side */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="flex space-x-3 sm:space-x-4">
            <a href="#" aria-label="Twitter" className="text-white hover:text-[#115237] transition-colors">
              <FaTwitter className="text-sm md:text-base" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-[#115237] transition-colors">
              <IoLogoInstagram className="text-sm md:text-base" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:text-[#115237] transition-colors">
              <FaFacebook className="text-sm md:text-base" />
            </a>
          </div>

          <Link 
            to="/login" 
            className="flex items-center text-white hover:text-[#115237] transition-colors"
            aria-label="Login"
          >
            <MdAccountCircle className="text-sm md:text-base mr-1" />
            <span className="text-xs sm:text-sm font-semibold font-poppins">Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
}