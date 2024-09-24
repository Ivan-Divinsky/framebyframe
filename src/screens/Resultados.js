import React from "react";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer";
import ListaResultados from "../components/ListaResultados";
import BarraDeBusqueda from "../components/BarraDeBusqueda";
import "./style.css";

function Resultados() {
  return (
    <div className="page-container">
      <Navbar/>

      <h1 className="titulo">Frame By Frame</h1>

      <BarraDeBusqueda/>

      <ListaResultados/>

      <Footer/>
    </div>
  );
}

export default Resultados;
