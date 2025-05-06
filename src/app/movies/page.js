"use client"
import React, { useState, useEffect } from 'react'
import MovieList from './MovieList';

export default function App() {
    const urlMovies = "https://mflixbackend.azurewebsites.net/api/movies"
    const pageSize = 100;
    const [page, setPage] = useState(0)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(urlMovies + `?pageSize=${pageSize}&page=${page}`)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h1>TECNOSHARE - PELÍCULAS</h1>
            <MovieList movies={movies}/>

        </>
    )
}