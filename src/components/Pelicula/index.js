import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faStar } from "@fortawesome/free-solid-svg-icons";

class Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDescripcion: false,
      colorFavorito: "#909399",
      verMas: "Ver mas",
      favorito: false,
      listaFavoritos: [],
      seleccionada: false,
      pelicula: props,
    };
    this.muestraDescripcion = this.muestraDescripcion.bind(this);
    //this.agregarFavorito = this.agregarFavorito.bind(this);
  }

  muestraDescripcion() {
    document.querySelector(".character-card button");
    this.setState({
      mostrarDescripcion: !this.state.mostrarDescripcion,
      verMas: this.state.verMas === "Ver mas" ? "Ver menos" : "Ver mas",
    });
  }

  /* 
  agregarFavorito() {
    const { listaFavoritos, favorito, pelicula } = this.state;

    let nuevaListaFavoritos = [...listaFavoritos];

    if (favorito) {
      nuevaListaFavoritos.push(pelicula);
    } else {
      nuevaListaFavoritos = nuevaListaFavoritos.filter(
        (item) => item.id !== pelicula.id
      );
    }

    localStorage.setItem(pelicula.id, JSON.stringify(nuevaListaFavoritos));

    this.setState({
      listaFavoritos: nuevaListaFavoritos,
      favorito: !favorito,
      colorFavorito:
        this.state.colorFavorito === "#909399" ? "#f4e400" : "#909399",
    });
  }

  */

  /* */

  agregarFavorito(id){
    const favoritosStorage = localStorage.getItem('favoritos');

    if(favoritosStorage !== null){
      const arrFavorito = JSON.parse(favoritosStorage);
      arrFavorito.push(id);
      const arrStringificado = JSON.stringify(arrFavorito);
      localStorage.setItem('favoritos', arrStringificado);
    } else {
      const favorito = [id]
      const arrStringificado = JSON.stringify(favorito);
      localStorage.setItem('favoritos', arrStringificado);
     }

     this.setState({
      favorito: true
     })

  }

  sacarFavorito(id){
    const favoritosStorage = localStorage.getItem('favoritos');

    if(favoritosStorage !== null){

      const arrFavorito = JSON.parse(favoritosStorage);

      console.log('arrFav' , arrFavorito);

      const newArrFavorito = arrFavorito.filter(item => item !== id);

      console.log('newArrFav' , newArrFavorito);

      const arrStringificado = JSON.stringify(newArrFavorito);

      console.log('arrStringificado' , arrStringificado);

      localStorage.setItem('favoritos', arrStringificado);
    }
    this.setState({
      favorito: false
    });
  }

  render() {
    const { data } = this.props; 
    const { mostrarDescripcion, colorFavorito, verMas } = this.state;

    let descripcion;
    if (mostrarDescripcion === true) {
      descripcion = <p>{data.overview}</p>;
    }

     return (
      <div className="movie-card">
        <div className="movie">
        <img className="movieImg" src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`} alt={data.title} />

        <div className="movie-info"> 
        <Link to = {`/pelicula/id/${data.id}` }>
          <h4 >{data.title}</h4>
        </Link>
        <button className= "BotonDescripcion" onClick={this.muestraDescripcion}>
          {verMas}
        </button>
        {descripcion}
        </div>

        <button
          onClick={() => 
            this.state.favorito ? 
            this.sacarFavorito(this.state.pelicula.data.id) :
            this.agregarFavorito(this.state.pelicula.data.id)
          } 
        >Favorito</button>

        {/* <FontAwesomeIcon 
          icon={faStar} 
          className="iconoFavoritoo" 
          style={{ color: colorFavorito }} 
          onClick={() => this.agregarFavorito(this.state.pelicula.id) } 
        /> */}
        </div>
      </div>
    )
      
  }
}

export default Pelicula;
