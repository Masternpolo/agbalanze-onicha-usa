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

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
     <Navbar/>
     <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
         <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Events" element={<Events/>}/>
        <Route exact path="/Members" element={<Members/>}/> 
        <Route exact path="/Gallery" element={<Gallery/>}/> 
        <Route exact path="/contact" element={<Contact/>}/> 

      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
