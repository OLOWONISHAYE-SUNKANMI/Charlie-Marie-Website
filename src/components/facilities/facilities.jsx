import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

export default function Facilities() {
  const facilityImages = [
    [
      'https://res.cloudinary.com/depeqzb6z/image/upload/v1755240816/IMG-20250814-WA0022_okhqu9.jpg',
      'https://res.cloudinary.com/depeqzb6z/image/upload/v1755240815/IMG-20250814-WA0019_hujkz7.jpg'
    ],
    [
      'https://res.cloudinary.com/depeqzb6z/image/upload/v1755240817/IMG-20250814-WA0013_gvih9h.jpg',
      'https://res.cloudinary.com/depeqzb6z/image/upload/v1755240816/IMG-20250814-WA0008_irdtzn.jpg'
    ],
    [
      'https://res.cloudinary.com/depeqzb6z/image/upload/v1755240817/IMG-20250814-WA0015_ce7itp.jpg',
      'https://res.cloudinary.com/depeqzb6z/image/upload/v1755240815/IMG-20250814-WA0016_xxfcbt.jpg'
    ],
    [
      'https://res.cloudinary.com/depeqzb6z/image/upload/v1755240815/IMG-20250814-WA0004_xibckq.jpg',
      'https://res.cloudinary.com/depeqzb6z/image/upload/v1755240816/IMG-20250814-WA0005_ladiao.jpg'
    ]
  ];

  return (
    <div className='py-10 px-4 sm:px-6 md:px-8 lg:px-12'>
      <Fade direction='up' triggerOnce>
        <div className='text-center pb-8 md:pb-12'>
          <h2 className='font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#620000]'>
            Our Facilities
          </h2>
        </div>
      </Fade>

      <div className='space-y-8 md:space-y-12'>
        {facilityImages.map((imagePair, index) => (
          <Slide 
            key={index} 
            direction={index % 2 === 0 ? 'up' : 'down'} 
            triggerOnce
          >
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8'>
              {imagePair.map((image, imgIndex) => (
                <div 
                  key={imgIndex} 
                  className='w-full md:w-2/5 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
                >
                  <img 
                    src={image} 
                    alt={`Facility ${index * 2 + imgIndex + 1}`} 
                    className='w-full h-auto object-cover hover:scale-105 transition-transform duration-500'
                  />
                </div>
              ))}
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}