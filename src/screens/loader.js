import React from "react";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import "./style.css";

function loader() {
    
    return (
      <div>
        <Navbar/>
  
        <h1>Loader</h1>
  
        <Footer/>
      </div>
    );
  }
  
  export default loader;