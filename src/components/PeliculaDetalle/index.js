import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faStar } from "@fortawesome/free-solid-svg-icons";

class Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFavorito: "#909399",
      verMas: "Ver mas",
      favorito: true,
      listaFavoritos: [],
      seleccionada: false,
      pelicula: props
    };
    // this.agregarFavorito = this.agregarFavorito.bind(this);
    // this.seleccionada = this.seleccionada.bind(this);
  }
  

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
      const newArrFavorito = arrFavorito.filter(item => item !== id);
      const arrStringificado = JSON.stringify(newArrFavorito);
      localStorage.setItem('favoritos', arrStringificado);
    }
    this.setState({
      favorito: false,
      colorFavorito:
        this.state.colorFavorito === "#909399" ? "#f4e400" : "#909399",
    });
  }
  

  render() {
    const { pelicula } = this.props; 
    const { colorFavorito } = this.state;
    console.log(`Tu pelicula `,pelicula);

    return (
      <div className="movie-card-porId">
        <div className="detalle">
        <img src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`} alt={pelicula.title} />
        <Link onClick={this.selectxId} to={`/pelicula/id/${pelicula.id}`}>
          <h2>{pelicula.original_title}</h2>
        </Link>

        
        <h4>Generos: {pelicula.genres.map(genre => genre.name).join(", ")}</h4>
        <h4>Fecha de salida: {pelicula.release_date}</h4>
        <h4>Duracion: {pelicula.runtime} minutos</h4>
        <h4>Rating: {pelicula.vote_average.toFixed(1)}</h4>
        <h4>Sinopsis: {pelicula.overview}</h4>

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
