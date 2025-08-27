import React from 'react'
import Fade from 'react-awesome-reveal'

export default function blogHeader() {
  return (
      <div className='hero'>
                   <Fade direction="down" triggerOnce>
                        {/* Text block */}
                        <div className="hero-container write-up text-center px-4 py-8
                                        sm:px-6 sm:py-10 
                                        md:px-10 md:py-14 
                                        lg:px-20 lg:py-16
                                        xl:px-32 xl:py-20">
                          <p className="font-extrabold text-[#FFFFFF] my-8
                                         text-2xl sm:text-3xl 
                                         md:text-4xl lg:text-5xl
                                         whitespace-nowrap overflow-x-auto pb-2
                                         md:whitespace-normal md:overflow-visible">
                            Blog Details
                          </p>
                          </div>
                   </Fade>
            </div>
  )
}
