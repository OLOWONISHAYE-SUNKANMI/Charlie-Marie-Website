import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './pages/homepage/homepage.jsx' 
import About from './pages/about/about.jsx'
import Layout from './Layout.jsx' 


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
         <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          
          
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
