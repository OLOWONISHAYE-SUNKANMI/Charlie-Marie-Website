// import React from 'react';
// import { Fade } from 'react-awesome-reveal';
// import './hero.css';

// export default function Hero() {
//   return (
//     <div className="hero w-full">
//       <Fade direction="down" triggerOnce>
//         {/* Text block */}
//         <div className="hero-container write-up text-center px-4 py-8 
//                         sm:px-6 sm:py-10 
//                         md:px-10 md:py-14 
//                         lg:px-20 lg:py-16
//                         xl:px-32 xl:py-20">
//           <h3 className="font-bold text-white mb-2 
//                           text-xl sm:text-2xl 
//                           md:text-3xl md:mb-4 
//                           lg:text-3xl lg:mb-6">
//             Welcome to
//           </h3>
//           <p className="font-extrabold text-[#115237] 
//                          text-2xl sm:text-3xl 
//                          md:text-4xl lg:text-5xl
//                          whitespace-nowrap overflow-x-auto pb-2
//                          md:whitespace-normal md:overflow-visible">
//             Charlie Marie Group of Schools
//           </p>
//           <p className="text-[#620000] font-bold mt-2 sm:mt-3
//                         text-sm sm:text-base md:text-lg">
//             GOVT. AND WAEC APPROVED
//           </p>
//           <p className="text-white font-bold mt-2 sm:mt-3
//                         text-sm sm:text-base md:text-lg">
//             ...catch them young to build a brighter future
//           </p>
//         </div>

//         {/* Category chips */}
// <div
//   className="grid grid-cols-2 gap-3 py-4 px-4
//              sm:grid-cols-3 sm:gap-5 sm:py-5 sm:px-6
//              md:grid-cols-3 md:gap-6 md:py-6 md:px-8
//              lg:grid-cols-6 lg:gap-8 lg:py-8 lg:px-10"
// >
//   {[
//     { title: "PRE-SCHOOL", bg: "bg-[#EF4444]" },
//     { title: "NURSERY SCHOOL", bg: "bg-[#10B981]" },
//     { title: "PRIMARY SCHOOL", bg: "bg-[#F59E0B]" },
//     { title: "SECONDARY SCHOOL", bg: "bg-[#78350F]" },
//     { title: "VOCATIONAL SCHOOL", bg: "bg-[#3B82F6]" },
//     { title: "SPORT ACADEMY", bg: "bg-[#F97316]" },
//   ].map((item, index) => (
//     <div
//       key={index}
//       className={`${item.bg} rounded-lg px-4 py-3 
//                   sm:px-5 sm:py-4 
//                   md:px-6 md:py-5`}
//     >
//       <h3 className="text-white font-semibold font-poppins 
//                      text-xs sm:text-sm md:text-base text-center">
//         {item.title}
//       </h3>
//     </div>
//   ))}
// </div>

//       </Fade>
//     </div>
//   );
// }

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './hero.css';

export default function Hero() {
  return (
    <div className="hero w-full bg-cover bg-center relative">
      <Fade direction="down" triggerOnce>
        <div className="hero-container text-center px-4 py-8 
                        sm:px-6 sm:py-10 
                        md:px-10 md:py-14 
                        lg:px-20 lg:py-16
                        xl:px-32 xl:py-20">

          {/* Text block */}
          <h3 className="font-bold text-white mb-2 
                          text-xl sm:text-2xl 
                          md:text-3xl md:mb-4 
                          lg:text-3xl lg:mb-6">
            Welcome to
          </h3>

          <p className="font-extrabold text-[#115237] 
                         text-2xl sm:text-3xl 
                         md:text-4xl lg:text-5xl
                         whitespace-nowrap overflow-x-auto pb-2
                         md:whitespace-normal md:overflow-visible">
            Charlie Marie Group of Schools
          </p>

          <p className="text-[#620000] font-bold mt-2 sm:mt-3
                        text-sm sm:text-base md:text-lg">
            GOVT. AND WAEC APPROVED
          </p>

          <p className="text-white font-bold mt-2 sm:mt-3
                        text-sm sm:text-base md:text-lg">
            ...catch them young to build a brighter future
          </p>
        </div>

        {/* Category chips */}
        <div
          className="grid grid-cols-2 gap-3 py-6 px-4
                     sm:grid-cols-3 sm:gap-5 sm:py-8 sm:px-6
                     md:grid-cols-3 md:gap-6 md:py-10 md:px-8
                     lg:grid-cols-6 lg:gap-8 lg:py-12 lg:px-10
                     w-full"
        >
          {[
            { title: "PRE-SCHOOL", bg: "bg-[#EF4444]" },
            { title: "NURSERY SCHOOL", bg: "bg-[#10B981]" },
            { title: "PRIMARY SCHOOL", bg: "bg-[#F59E0B]" },
            { title: "SECONDARY SCHOOL", bg: "bg-[#78350F]" },
            { title: "VOCATIONAL SCHOOL", bg: "bg-[#3B82F6]" },
            { title: "SPORT ACADEMY", bg: "bg-[#F97316]" },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-lg px-4 py-3 
                          sm:px-5 sm:py-4 
                          md:px-6 md:py-5`}
            >
              <h3 className="text-white font-semibold font-poppins 
                             text-xs sm:text-sm md:text-base text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
