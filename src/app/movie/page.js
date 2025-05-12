"use client"
import { useState, useEffect } from "react"
import MovieList from "./MovieList";

export default function MoviePage(){
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1")
        .then(response => response.json())
        .then(data =>{
            setMovies(data);
            })
        .catch(err => console.log(err))
    }, []);


return(
    <MovieList Movies={movies}></MovieList>
)    
}