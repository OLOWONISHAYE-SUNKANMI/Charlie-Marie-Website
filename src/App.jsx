import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './pages/homepage/homepage.jsx'  


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
         <Route path="/" element={<Home />} />
     )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
