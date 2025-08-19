import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './pages/homepage/homepage' 
import About from './pages/about/about'
import Gallery from './pages/gallery/gallery';
import Layout from './Layout' 


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
         <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />  
          <Route path='gallery' element={<Gallery />} />
          </Route>

         
     )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
