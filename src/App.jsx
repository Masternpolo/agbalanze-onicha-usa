import React,{useEffect} from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Card from './components/Card'
import Home from './components/Home'
import Contact from './components/Contact'
import Members from './components/Members'
import Gallery from './components/Gallery'
import Events from './components/Events'
import About from './components/About'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/About", element: <About/>},
  { path: "/Contact", element: <Contact/>},
  { path: "/Members", element: <Members/>},
  { path: "/Gallery", element: <Gallery/>},
  { path: "/Events", element: <Events/>},
])

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
     <Navbar/>
     <RouterProvider router={router}/>
    <Footer/>
    </>
  )
}

export default App
