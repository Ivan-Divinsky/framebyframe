import React from "react";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import Favorito from "../components/Favoritos";
import BarraDeBusqueda from "../components/BarraDeBusqueda";
import "./style.css";

function Favoritos() {
  return (
    <div>
      <Navbar />
      <BarraDeBusqueda />
      <h1 className="titulo">Frame By Frame</h1>
      
      <h3>Tus Favoritos</h3>

      <Favorito />

      <Footer />
    </div>
  );
}

export default Favoritos;