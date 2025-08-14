import React from 'react'
import Hero from '../../components/hero/hero';
import Info from '../../components/info/info';


export default function homepage() {
  return (
   <>
    <div className='w-full h-80'>
     <Hero />
    </div>
    <div> 
       <Info />
    </div>
   </>
  )
}