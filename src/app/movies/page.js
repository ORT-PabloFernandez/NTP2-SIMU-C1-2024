"use client";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [page , setPage]=useState(1);

  useEffect(()=>{
    fetchMovies();
  }, [page]);

  const fetchMovies = () => {
    fetch(
      `https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.log(error));
  };

  const pageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
    <div className="pagination">
      {movies.length > 0 && ( 
         <div>
              <button className="pagination-button" onClick={() => pageChange(page - 1)} disabled={page <= 1}>
                Anterior
              </button>
            <span>Página {page}</span>
            <button className="pagination-button" onClick={() => pageChange(page + 1)}>Siguiente</button>
          </div>
      )}
    </div>
    <MovieList Movies={movies} />
  </div>
);
}