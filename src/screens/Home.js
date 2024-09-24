import React from "react";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer";
import Peliculas from "../components/ListaPeliculas";
import BarraDeBusqueda from "../components/BarraDeBusqueda";
import "./style.css";

function Home() {
  return (
    <div className="page-container">
      <Navbar/>

      <h1 className="titulo">Frame By Frame</h1>

      <BarraDeBusqueda/>

      <Peliculas/>

      <Footer/>
    </div>
  );
}

export default Home;
