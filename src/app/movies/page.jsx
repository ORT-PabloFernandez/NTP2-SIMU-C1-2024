
"use client"
import { useState, useEffect } from "react";
import MovieList from "./MovieList"

export default function MoviePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies")
            .then(
                response => response.json()
            )
            .then(data => {
                //console.log(data);
                setMovies(data);
            }

            )
            .catch(
                error => console.log(error));
    }, []);



    return (
        <MovieList movies={movies} />
    );
}