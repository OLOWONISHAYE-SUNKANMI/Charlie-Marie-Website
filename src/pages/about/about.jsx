import React from 'react'
import AboutHero from '../../components/aboutHero/aboutHero'
import AboutContent from '../../components/aboutContent/aboutContent'
import Counter from '../../components/counter/counter'
import Vision from '../../components/aboutContent/visionStatement'

export default function about() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <Counter />
      <Vision />
    </>
  )
}
