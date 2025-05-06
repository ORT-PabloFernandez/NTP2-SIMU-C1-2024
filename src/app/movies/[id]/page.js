"use client";
import { useState, useEffect } from "react";
import MoviePage from "../page";

export default function MovieDetailPage({ params }) {
  const { id } = params;
  const [movie, setMovies] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const fetchMovies = () => {
    fetch(
      `https://mflixbackend.azurewebsites.net/api/movies?pageSize=16&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.find((movie) => movie["_id"] === id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="movie-detail">
      <img
        src={movie.poster}
        alt={movie.title}
        className="movie-detail__poster"
      />
      <div className="movie-detail__info">
        <h3 className="movie-detail__title">{movie.title}</h3>
        <p className="movie-detail__plot">{movie.fullplot}</p>
      </div>
    </div>
  );
}
