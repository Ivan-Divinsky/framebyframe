import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // Importar withRouter
import "./styles.css";
import Pelicula from "../Pelicula/index";

class ListaResultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultadoBusqueda: [],
        };
    }

    componentDidMount() {
        const { resultado } = this.props.match.params;
        console.log("URL: ", resultado); 
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQ2MTA5MDhjNDVkMzNhMWJmMmVhMGMzZGNiNTAwZCIsIm5iZiI6MTcyNTQ1NDczNC45Njc3NTEsInN1YiI6IjY1NDkzMGM5NDFhNTYxMzM2Yjc4ZWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QJqmZA_CoEaEyobM43XiRSdX0-kMm4ZADSKAcW1tD2U'
            }
        };
        // Llamada a la API para obtener datos del personaje
        fetch(`https://api.themoviedb.org/3/search/movie?query=${resultado}&include_adult=false&language=en-US&page=1`, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Datos de la API:", data);
                if (data.results) {
                    this.setState({ resultadoBusqueda: data.results.slice(0, 30) });
                }
                else {
                    console.log("No se encontraron resultados");
                }
            })
            .catch((error) =>
                console.error("Error al obtener los datos del personaje:", error)
            );
    }

    render() {
        const { resultadoBusqueda } = this.state;
        console.log("Resultados:", resultadoBusqueda);

        if (!resultadoBusqueda) {
            return (
                <div>
                    <p>Cargando...</p>
                </div>
            );
        }

        return (
            <div className="movies-container">
                {resultadoBusqueda.map((pelicula, index) => (
                    <Pelicula key={index} data={pelicula} />
                ))}
            </div>
        );
    }
}

export default withRouter(ListaResultados);