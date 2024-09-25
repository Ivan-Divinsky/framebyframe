import React from "react";
import MainNav from "../mainNav";
import './styles.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <div className="logo">
        <img src="/img/logoFramebyFrame.jpeg" alt=""/>
      </div>

      <ul className="main-nav">
        <Link to={`/`}>
          <MainNav titulo = {"Home"}/>
        </Link>

        <Link to={`/aboutUs`}>
          <MainNav titulo = {"About Us"}/>
        </Link>

        <Link to={`/Tusfavoritos`}>
          <MainNav titulo = {"Favoritos"}/>
        </Link>

        <Link to={`/genero/popular`}>
          <MainNav titulo = {"Ver mas populares"}/>
        </Link>

        <Link to={"/genero/top_rated"}>
          <MainNav titulo = {"Ver mas mejor valoradas"}/>
        </Link>

      </ul>

      <ul className="user">
        <li>
          <h1>Walter White</h1>
          <img src="/img/user.jpg" alt=""/>
        </li>
      </ul>

    </nav>
  );
}


export default Navbar;
