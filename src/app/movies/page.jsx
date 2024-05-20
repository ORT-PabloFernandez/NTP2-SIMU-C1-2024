
"use client"
import { useState, useEffect } from "react";
import MovieList from "./MovieList"
import Movie from "./Movie";
export default function MoviePage(props) {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 8;
    

    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=${pageSize}&page=${page}`)
            .then(
                response => response.json())
            .then(data => {
                console.log(data);
                if (data.length < pageSize) {
                    setHasMore(false);
                }
                if (page === 1) {
                    setMovies(data);
                } else {
                    setMovies((prevMovies) => [...prevMovies, ...data]);
                }
            })
            .catch(
                error => console.log(error));
    }, [page]);

    const handleNextPage = () => {
        if (hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };
    
    return (
        <div className="container">
      <MovieList movies={movies} />
            <div className="button-container">
                <button onClick={handleNextPage} className="button">Siguiente</button>
           </div>
        </div>
    );
}