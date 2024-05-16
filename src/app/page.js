"use client";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

const URL =
  "https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=1";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(URL)
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
