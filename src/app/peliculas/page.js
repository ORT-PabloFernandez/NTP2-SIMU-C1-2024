"use client";
import { useState, useEffect } from "react";
import Peliculas from "./Peliculas.jsx";

export default function Pagina(props) {
  const [peliculas, setPeliculas] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const pageSize = 20;

  useEffect(() => {
    fetch(
      `https://mflixbackend.azurewebsites.net/api/movies?pageSize=${pageSize}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length < pageSize) {
          setHasMore(false);
        }
        setPeliculas((prevPeliculas) => [...prevPeliculas, ...data]);
      })
      .catch((error) => setError(error.message));
  }, [page]);

  const handleNextPage = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="movies-container">
      {error && <div className="error">Error: {error}</div>}
      <Peliculas Peliculas={peliculas} />
      {hasMore ? (
        <button onClick={handleNextPage}>Siguiente página</button>
      ) : (
        <div className="no-more-movies">No hay más películas para mostrar</div>
      )}
    </div>
  );
}
