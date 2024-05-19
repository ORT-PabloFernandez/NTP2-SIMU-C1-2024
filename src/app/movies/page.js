"use client";
import { useState, useEffect } from "react";
import MovieList from "./MovieList.jsx";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://mflixbackend.azurewebsites.net/api/movies?pageSize=50&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };
  
  const prevPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">Movies</h1>
      <MovieList movies={movies} />
      <div className="flex justify-center mt-4">
        <button onClick={prevPage} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded m-20">Previous</button>
        <button onClick={nextPage} className="px-4 py-2 ml-2 bg-blue-500 text-white rounded m-20">Next</button>
      </div>
    </div>
  );
}