import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/footer/footer.jsx';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
