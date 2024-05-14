"use client";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const baseUrl = "https://mflixbackend.azurewebsites.net/api/movies";
  const pageSize = 16; // 4x4 grid, so 16 movies per page

  useEffect(() => {
    const url = `${baseUrl}?pageSize=${pageSize}&page=${page}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <>
      <MovieList movies={movies} />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
