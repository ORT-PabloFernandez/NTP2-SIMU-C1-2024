"use client";
import { useState, useEffect } from "react";
import MovieList from "./MovieList.jsx";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
