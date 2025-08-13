import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header'
import Navbar from './components/Navbar'
import './Layout.css'


export default function Layout() {
  return (
    <>
    <div className='layout'>
      <Header />
       <Navbar />
      <Outlet />
    </div>
    <div>
       <Footer />
    </div>
    </>
  
  )
}
