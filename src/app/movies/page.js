"use client";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";
// Siempre que necesite el useState y/o useEffect tengo que poner use client

export default function UserPage() {
        
    const [movies, setMovies] = useState([]);
    useEffect( () => {
        fetch(
             "https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1"
        ).then((response) => response.json())
        .then((data) => {
            setMovies(data)
            console.log(data)
        })
        .catch(error => console.log(error));
    }, []);


    return (
        <>
            <MovieList Movies={movies} />
        </>
    );
}