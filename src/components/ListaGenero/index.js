import React, { Component } from "react";
import "./styles.css";
import { withRouter } from "react-router-dom"; 
import Pelicula from "../Pelicula";

class listaGeneros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasPopularesExpanded: [],
            peliculasTopRatedExpanded: [],
            page: 2,
        };
    }

    componentDidMount() {
        const { genero } = this.props.match.params;
        console.log(genero);

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQ2MTA5MDhjNDVkMzNhMWJmMmVhMGMzZGNiNTAwZCIsIm5iZiI6MTcyNTQ1NDczNC45Njc3NTEsInN1YiI6IjY1NDkzMGM5NDFhNTYxMzM2Yjc4ZWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QJqmZA_CoEaEyobM43XiRSdX0-kMm4ZADSKAcW1tD2U'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${genero}?language=en-US&page=1`, options)
            .then((response) => response.json())
            .then((data) => {
                if (genero === "popular") {
                    this.setState({ peliculasPopularesExpanded: data.results.slice(0, 15) });
                }
                else if (genero === "top_rated") {
                    this.setState({ peliculasTopRatedExpanded: data.results.slice(0, 15) });
                }
            })
            .catch((error) =>
                console.error("Error al obtener las películas populares:", error)
            );
    }
    
    loadMoreMovies = () => {
        const { genero } = this.props.match.params;
        const { peliculasPopularesExpanded } = this.state;
        const { peliculasTopRatedExpanded } = this.state;
        const { page } = this.state;

        this.setState({ page: page + 1 });

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQ2MTA5MDhjNDVkMzNhMWJmMmVhMGMzZGNiNTAwZCIsIm5iZiI6MTcyNTQ1NDczNC45Njc3NTEsInN1YiI6IjY1NDkzMGM5NDFhNTYxMzM2Yjc4ZWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QJqmZA_CoEaEyobM43XiRSdX0-kMm4ZADSKAcW1tD2U'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${genero}?language=en-US&page=${page}`, options)
            .then((response) => response.json())
            .then((data) => {
            
                if (genero === "popular") {
                    this.setState({ peliculasPopularesExpanded: peliculasPopularesExpanded.concat(data.results.slice(0, 10)) });
                }
                else if (genero === "top_rated") {
                    this.setState({ peliculasTopRatedExpanded: peliculasTopRatedExpanded.concat(data.results.slice(0, 10)) });
                }
            })
            .catch((error) =>
                console.error("Error al obtener las películas populares:", error)
            );
    }

    render() {
        const { peliculasPopularesExpanded } = this.state;
        const { peliculasTopRatedExpanded } = this.state;
        const { genero } = this.props.match.params;
        

        return (
            <div>           
                <h2>{genero === "top_rated" ? "Películas Mejor Valoradas" : "Películas Populares"}</h2>

                <div className="movies-container">
                    {genero === "top_rated" && peliculasTopRatedExpanded.map((pelicula) => {
                        return <Pelicula key={pelicula.id} data={pelicula} />;
                    })}
                    {genero === "popular" && peliculasPopularesExpanded.map((pelicula) => {
                        return <Pelicula key={pelicula.id} data={pelicula} />;
                    })}
                </div>

                <button className="BotonDescripcion" onClick={this.loadMoreMovies}>Cargar más</button>
            </div>
        );
    }
}

export default withRouter(listaGeneros); 
