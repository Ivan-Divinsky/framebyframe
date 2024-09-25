import React from 'react'
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import "./style.css";

function aboutUs() {
  return (
    <div>
      <Navbar/>
      <h1 className="titulo">Frame By Frame</h1>
      
      <h3>About Us</h3>

      <Footer/>
    </div>

  )
}

export default aboutUs