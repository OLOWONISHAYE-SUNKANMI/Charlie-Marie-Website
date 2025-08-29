// import React from 'react'
// import Slider from "react-slick";
// import './gallery.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Fade, Slide } from "react-awesome-reveal";

// const images = [
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0101_e5fqku.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517521/IMG-20250812-WA0067_cxnjtq.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517519/IMG-20250812-WA0065_npxq4t.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0099_uzxczu.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517516/IMG-20250812-WA0059_acbfcp.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517517/IMG-20250812-WA0060_zs9xms.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517515/IMG-20250812-WA0083_q8k6hr.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517515/IMG-20250812-WA0058_yagamr.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517513/IMG-20250812-WA0046_pcc6ym.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517513/IMG-20250812-WA0074_o4prm5.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517512/IMG-20250812-WA0076_tnv6vl.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517517/IMG-20250812-WA0062_ytpqyq.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0096_yik0ka.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517521/IMG-20250812-WA0095_tazybs.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517521/IMG-20250812-WA0094_htum6s.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517518/IMG-20250812-WA0066_zfbw0r.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517518/IMG-20250812-WA0064_sxorna.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0101_e5fqku.jpg',
//   'https://res.cloudinary.com/depeqzb6z/image/upload/v1755517520/IMG-20250812-WA0093_k9vp9u.jpg'
// ]

// export default function Gallery() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   return (
//     <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 w-full px-4 lg:px-0 lg:h-[550px]">
//       {/* Text Section */}
//       <Slide direction="left"> 
//         <div className="gallery-text lg:ml-36 text-center lg:text-left">
//           <h3 className="text-[#115237] font-extrabold text-2xl sm:text-3xl font-poppins">
//             Photo Gallery
//           </h3>
//           <h3 className="text-[#620000] font-semibold mt-3 sm:mt-5 text-lg sm:text-xl font-poppins whitespace-nowrap">
//             Photos of Memorable Events
//           </h3>
//         </div>
//       </Slide>

//       {/* Slider Section */}
//       <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
//         <Slider {...settings}>
//           {images.map((src, idx) => (
//             <Fade key={idx}>
//               <div>
//                 <img
//                   src={src}
//                   alt={`Gallery ${idx}`}
//                   className="w-full object-cover rounded-lg gallery-img shadow-md"
//                 />
//               </div>
//             </Fade>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   )
// }
import React from "react";
import Slider from "react-slick";
import "./gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, Slide } from "react-awesome-reveal";

const images = [
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0101_e5fqku.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517521/IMG-20250812-WA0067_cxnjtq.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517519/IMG-20250812-WA0065_npxq4t.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0099_uzxczu.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517516/IMG-20250812-WA0059_acbfcp.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517517/IMG-20250812-WA0060_zs9xms.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517515/IMG-20250812-WA0083_q8k6hr.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517515/IMG-20250812-WA0058_yagamr.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517513/IMG-20250812-WA0046_pcc6ym.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517513/IMG-20250812-WA0074_o4prm5.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517512/IMG-20250812-WA0076_tnv6vl.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517517/IMG-20250812-WA0062_ytpqyq.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517522/IMG-20250812-WA0096_yik0ka.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517521/IMG-20250812-WA0095_tazybs.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517521/IMG-20250812-WA0094_htum6s.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517518/IMG-20250812-WA0066_zfbw0r.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517518/IMG-20250812-WA0064_sxorna.jpg",
  "https://res.cloudinary.com/depeqzb6z/image/upload/v1755517520/IMG-20250812-WA0093_k9vp9u.jpg",
];

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds delay
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 w-full px-4 lg:px-10 lg:h-[550px] mb-12 md:mb-0">
      {/* Text Section */}
      <Slide direction="left" triggerOnce>
        <div className="gallery-text text-center lg:text-left max-w-sm lg:max-w-md">
          <h3 className="text-[#115237] font-extrabold text-3xl font-poppins">
            Photo Gallery
          </h3>
          <h4 className="text-[#620000] font-semibold mt-3 sm:mt-5 text-lg sm:text-xl font-poppins">
            Photos of Memorable Events
          </h4>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            A glimpse into our vibrant community, academic excellence, and
            cherished celebrations captured through moments that matter.
          </p>
        </div>
      </Slide>

      {/* Slider Section */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
        <Slider {...settings}>
          {images.map((src, idx) => (
            <Fade key={idx} triggerOnce>
              <div>
                <img
                  src={src}
                  alt={`Memorable event photo ${idx + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg gallery-img"
                />
              </div>
            </Fade>
          ))}
        </Slider>
      </div>
    </div>
  );
}
