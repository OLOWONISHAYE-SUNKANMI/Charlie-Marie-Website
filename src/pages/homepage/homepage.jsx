import React from 'react'
import Hero from '../../components/hero/hero';
import Info from '../../components/info/info';
import Gallery from '../../components/gallery/gallery';
import Facilities from '../../components/facilities/facilities'


export default function homepage() {
  return (
    <div>
     <Hero />
      <Info />
      <Gallery />
      <Facilities />
    </div>
   
  )
}