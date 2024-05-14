"use client";

import MovieList from "./movieList";
import { useState, useEffect } from "react";

export default function Home() {
  let API_URL = "https://mflixbackend.azurewebsites.net/api/movies?page=1&pageSize=5"

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      API_URL
    )
      .then((res) => res.json())
      .then((juanCarlos) => {
        setMovies(juanCarlos);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <MovieList Movies = {movies} />
    </>
  )
}
