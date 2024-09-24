import React, { Component } from "react";
import { withRouter } from "react-router-dom"; 
import "./styles.css";
import PeliculaDetalle from "../PeliculaDetalle/index";

class PersonajeXId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log("ID from URL: ", id); 
        const parsedId = parseInt(id.replace(':', ''), 10); 
        console.log("Parsed ID: ", parsedId);
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQ2MTA5MDhjNDVkMzNhMWJmMmVhMGMzZGNiNTAwZCIsIm5iZiI6MTcyNTQ1NDczNC45Njc3NTEsInN1YiI6IjY1NDkzMGM5NDFhNTYxMzM2Yjc4ZWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QJqmZA_CoEaEyobM43XiRSdX0-kMm4ZADSKAcW1tD2U'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Datos de la API:", data);
                this.setState({ pelicula: data});
            })
            .catch((error) =>
                console.error("Error al obtener los datos del personaje:", error)
            );
    }

    render() {
        const { pelicula } = this.state;
        console.log("Pelicula:", pelicula);

        if (!pelicula) {
            return (
                <div>
                    <p>Cargando...</p>
                </div>
            );
        }

        return (
            <div>
                <PeliculaDetalle pelicula={pelicula} />
            </div>
        );
    }
}

export default withRouter(PersonajeXId);