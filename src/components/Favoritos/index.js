import React, { Component } from "react";
import "./styles.css";
import Pelicula from '../Pelicula/index';
import PeliculaDetalle from "../PeliculaDetalle/index";

class Favorito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [] // Inicialmente vacío
        };
    }

componentDidMount() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQ2MTA5MDhjNDVkMzNhMWJmMmVhMGMzZGNiNTAwZCIsIm5iZiI6MTcyNTQ1NDczNC45Njc3NTEsInN1YiI6IjY1NDkzMGM5NDFhNTYxMzM2Yjc4ZWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QJqmZA_CoEaEyobM43XiRSdX0-kMm4ZADSKAcW1tD2U'
        }
    };
    const favoritosStorage = localStorage.getItem('favoritos');

    if (favoritosStorage !== null) {
        const favoritosIds = JSON.parse(favoritosStorage);
        favoritosIds.map((id) => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
                .then((response) => response.json())
                .then((data) => {
                    this.setState((copia) => ({
                        peliculasFavoritas: [...copia.peliculasFavoritas, data]
                    }));
                })
                .catch((error) => {
                    console.error("Error al obtener los datos del pelicula:", error);
                });
        });
    }
}

    render() {
        const { peliculasFavoritas } = this.state;
        console.log(peliculasFavoritas);

        if (peliculasFavoritas.length === 0) {
            return (
                <div>
                    <p className="noHayFav">No tienes peliculas favoritas</p>
                </div>
            );
        }

        return (
            <div>
                <div className="movies-container">
                    {peliculasFavoritas.map((pelicula) => (
                        <PeliculaDetalle pelicula={pelicula} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Favorito;