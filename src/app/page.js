"use client";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=5&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <MovieList Movies={movies} />
    </>
  );
}