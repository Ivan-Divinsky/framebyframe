import React, { Component } from "react";
import "./styles.css";
import Pelicula from "../Pelicula";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class listaPeliculas extends Component {
    constructor() {
        super();
        this.state = {
            peliculasPopulares: [],
            peliculasTopRated: [],
        };
    }

    componentDidMount() {
        // Realizar la solicitud fetch a TMDb
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=f14610908c45d33a1bf2ea0c3dcb500d&language=es-ES&page=1"
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.results) {
                    this.setState({ peliculasPopulares: data.results.slice(0, 5) });
                }
            })
            .catch((error) =>
                console.error("Error al obtener las películas populares:", error)
            );

        fetch(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=f14610908c45d33a1bf2ea0c3dcb500d&language=es-ES&page=1"
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.results) {
                    this.setState({ peliculasTopRated: data.results.slice(0, 5) });
                }
            })
            .catch((error) =>
                console.error("Error al obtener las películas populares:", error)
            );
    }   

    render() {
        const { peliculasPopulares } = this.state;
        const { peliculasTopRated } = this.state;

        return (
            <div>
                <h2>Películas Populares</h2>
                <div className="movies-container">
                {peliculasPopulares.map((personaje) => {
                        return <Pelicula key={personaje.id} data={personaje} />;
                    })}
                </div>
                <Link to="/genero/popular"><button><p>Ver más</p></button></Link>
                
                <h2>Películas Mejor Valoradas</h2>
                <div className="movies-container">
                {peliculasTopRated.map((personaje) => {
                        return <Pelicula key={personaje.id} data={personaje} />;
                    })}
                </div>
                
                <div className="botonVerMas">
                <Link to="/genero/top_rated"><button><p>Ver más</p></button></Link>
                </div>
            </div>
        );
    }
}

export default listaPeliculas;
