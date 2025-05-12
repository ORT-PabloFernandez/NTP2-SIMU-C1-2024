"use client"; // si estás usando App Router en Next.js

import { useEffect, useState } from "react";
import Pelicula from "./Pelicula";

export default function ListadoPeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  // En useEffect se hace el fetch a la API utilizando paginado (pageSize=100&page=1)

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=1&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data);
        setLoading(false);
        console.log("Película:", data);
      })
      .catch((error) => {
        console.error("Error al traer películas:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando películas...</p>;

  return (
    <div className="bg-gray-700 min-h-screen px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ml-20 mr-20">
        {peliculas.map((peli) => (
          <Pelicula key={peli._id} pelicula={peli} />
        ))}
      </div>
    </div>
  );
}
