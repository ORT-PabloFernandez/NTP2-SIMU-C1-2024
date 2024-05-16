"use client";
import { useEffect, useState } from "react";
import Movie from "./Movie";
const URL =
  "https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=10";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }),
    [];

  return (
    <div className="flex">
      {movies.map((m) => (
        <Movie img={m.poster} title={m.title} fullplot={m.fullplot} />
      ))}
    </div>
  );
}
