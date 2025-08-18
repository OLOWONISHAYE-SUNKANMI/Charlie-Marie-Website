import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='w-full bg-[#620000]'>
      <div className='container mx-auto px-4 py-8 min-h-[50vh] md:min-h-[65vh] flex flex-col justify-between'>
        {/* Logo and School Info */}
        <div className='logo flex flex-col items-center justify-center text-center'>
          <img 
            src='https://res.cloudinary.com/depeqzb6z/image/upload/v1755201313/logo_rarwwq.png' 
            alt='logo' 
            className='w-20 h-20 md:w-24 md:h-24 mt-8 md:mt-12'
          />
          <h3 className='mt-4 md:mt-6 font-extrabold text-2xl md:text-4xl lg:text-5xl text-[#115237]'>
            Charlie Marie Group of Schools
          </h3>
          <p className='mt-3 md:mt-5 text-white text-base md:text-xl max-w-2xl px-4'>
            We're committed to building a brighter future for posterity
          </p>
        </div>

        {/* Navigation Links */}
        <div className='links mt-8 md:mt-12'>
          <ul className='flex flex-wrap justify-center items-center gap-4 md:gap-8'>
            <li className='text-white hover:text-[#115237] transition-colors'>
              <Link to="/">Home</Link>
            </li>
            <li className='text-white hover:text-[#115237] transition-colors'>
              <Link to="/about">About</Link>
            </li>
            <li className='text-white hover:text-[#115237] transition-colors'>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className='text-white hover:text-[#115237] transition-colors'>
              <Link to="/portal">Student's Portal</Link>
            </li>
            <li className='text-white hover:text-[#115237] transition-colors'>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className='mt-8 md:mt-12 bg-[#115237] w-full py-4'>
          <p className='text-[#FFFFFF] text-center text-sm md:text-base'>
            Copyright © 2025 | All rights reserved - Charlie Marie Group of Schools.
          </p>
        </div>
      </div>
    </footer>
  );
}