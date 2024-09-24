import React from "react";
import Navbar from "../components/Navbar/index";
import Footer from '../components/Footer/index';
import "./style.css";

function notFound() {
    
    return (
      <div>
        <Navbar/>
  
        <h1>404 Not found</h1>
  
        <Footer/>
      </div>
    );
  }
  
  export default notFound;