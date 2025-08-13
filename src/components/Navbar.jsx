import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'; // Assuming you have a CSS file for styling

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#115237] w-4/5 h-25 items-center flex ml-40 my-10 rounded-xl shadow-lg ">
        <div className="flex items-center">
          <img src="logo.png" alt="logo" className='w-15 h-15 ml-20'/>
        </div>

        {/* Navigation Links */}
        <ul className='flex items-center justify-between ml-30 text-white font-semibold'> 
          <Link to="/" className='mx-4 hover:text-[#620000] font-poppins'>Home</Link>
          <Link to="/" className='mx-4 hover:text-[#620000] font-poppins'>About</Link>
          <Link to="/" className='mx-4 hover:text-[#620000] font-poppins'>Gallery</Link>
          <Link to="/" className='mx-4 hover:text-[#620000] font-poppins'>Student's Portal</Link>
          <Link to="/" className='mx-4 hover:text-[#620000] font-poppins'>Contact</Link>   

        </ul>



        {/* Search Bar */}
        <div className='search-bar' style={{ marginLeft: 'auto', marginRight: '20px' }}>
          <input type="text" placeholder="Search" className='search-input p-3 bg-[#FFFFFF] w-60 rounded-lg font-grey-100 font-xs item-center'/>
        </div>
      </nav>
    </>
  )
}




