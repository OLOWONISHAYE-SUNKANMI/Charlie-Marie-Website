import React from 'react'
import Slider from "react-slick";
import './gallery.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, Slide } from "react-awesome-reveal";

const images = [
    '/charlie marie/event-image-slider-1.jpg',
    '/charlie marie/event-image-slider-2.jpg',
    '/charlie marie/event-image-slider-3.jpg',
    '/charlie marie/event-image-slider-4.jpg'
    // Add more image filenames as needed
]

export default function Gallery() {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
        <div className='justify-center flex item-center mt-20 w-[100%] h-[550px]'>
            <Slide direction='left'> 
            <div className='gallery-text ml-36'>
                <h3 className=' text-[#115237] font-extrabold text-3xl font-poppins'>Photo Gallery</h3>
                <h3 className=' text-[#620000] font-semibold mt-5 text-xl font-poppins'>Photos of Memorable Events</h3>
            </div>
            </Slide>
         
           

             <div className="w-full max-w-xl mx-auto">
                <Slider {...settings}>
                    {images.map((src, idx) => (
                    <Fade>
                    <div key={idx}>
                         <img src={src} alt={`Gallery ${idx}`} className="w-full object-cover rounded-lg gallery-img shadow-md" />
                    </div>
                    </Fade>

                    ))}
                </Slider>
            </div>
        </div>
    </>
  )
}
