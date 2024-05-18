"use client";
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function PageMovie() {
  const [peliculas, setPeliculas] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://mflixbackend.azurewebsites.net/api/movies?pageSize=9&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  const pageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div>
        <MovieList Peliculas={peliculas} />
      </div>

      <div className="pagination">
        {peliculas.length > 0 && (
          <div>
            <button
              className="pagination-button"
              onClick={() => pageChange(page - 1)}
              disabled={page <= 1}
            >
              Anterior
            </button>
            <span>Página {page}</span>
            <button
              className="pagination-button"
              onClick={() => pageChange(page + 1)}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
