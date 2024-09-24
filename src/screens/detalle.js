import React from 'react'
import Navbar from "../components/Navbar/index";
import "./style.css";
import DetallePelicula from "../components/PeliculaXId/index";
import Footer from "../components/Footer/index";
import BarraDeBusqueda from "../components/BarraDeBusqueda";

function DetalleID() {

  return (
    <div>
      <Navbar/>
      <BarraDeBusqueda/>
      <h1 className="titulo">Frame By Frame</h1>

      <DetallePelicula/>
      <Footer/>
    </div>
  )
}

export default DetalleID