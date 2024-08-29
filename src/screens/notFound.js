import React from "react";
import Navbar from "../components/Navbar/index";
import "./style.css";

function notFound() {
    
    return (
      <div>
        <Navbar/>
  
        <h1>404 Not found</h1>
  
        <footer>
          <p>Copyright © Dashboard 2022</p>
        </footer>
      </div>
    );
  }
  
  export default notFound;