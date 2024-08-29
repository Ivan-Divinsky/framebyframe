import React from "react";
import Navbar from "../components/Navbar/index";
import "./style.css";

function loader() {
    
    return (
      <div>
        <Navbar/>
  
        <h1>Loader</h1>
  
        <footer>
          <p>Copyright © Dashboard 2022</p>
        </footer>
      </div>
    );
  }
  
  export default loader;