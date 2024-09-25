import React from 'react'
import ListaGeneros from "../components/ListaGenero/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import BarraDeBusqueda from "../components/BarraDeBusqueda";
import "./style.css";

function Genero() {
  return (
    <div>
      <Navbar/>
      <BarraDeBusqueda/>
      <h1 className="titulo">Frame By Frame</h1>
      
      <h3>Genero</h3>
      
      <ListaGeneros/>

      <Footer/>
    </div>
  )
}

export default Genero