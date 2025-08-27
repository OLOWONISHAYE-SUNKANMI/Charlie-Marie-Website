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
import Blog from './pages/blog/blog'
import Contact from './pages/contact/contact'
import Layout from './Layout' 
import Login from './Login'
import Details from "./pages/blogDetails/blogDetails";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route path='/login' element={<Login/>}/>
         <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />  
          <Route path='gallery' element={<Gallery />} />
          <Route path='blog' element={<Blog />}/>
          <Route path='contact' element={<Contact />} />
          <Route path='content/:id' element= {<Details/>} />
          </Route>
      </>
      
     )


  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
