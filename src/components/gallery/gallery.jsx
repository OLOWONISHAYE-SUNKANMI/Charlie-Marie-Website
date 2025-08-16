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
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 w-full px-4 lg:px-0 lg:h-[550px]">
      {/* Text Section */}
      <Slide direction="left"> 
        <div className="gallery-text lg:ml-36 text-center lg:text-left">
          <h3 className="text-[#115237] font-extrabold text-2xl sm:text-3xl font-poppins">
            Photo Gallery
          </h3>
          <h3 className="text-[#620000] font-semibold mt-3 sm:mt-5 text-lg sm:text-xl font-poppins whitespace-nowrap">
            Photos of Memorable Events
          </h3>
        </div>
      </Slide>

      {/* Slider Section */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
        <Slider {...settings}>
          {images.map((src, idx) => (
            <Fade key={idx}>
              <div>
                <img
                  src={src}
                  alt={`Gallery ${idx}`}
                  className="w-full object-cover rounded-lg gallery-img shadow-md"
                />
              </div>
            </Fade>
          ))}
        </Slider>
      </div>
    </div>
  )
}
