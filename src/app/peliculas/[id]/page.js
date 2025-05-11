"use client";
import { useState, useEffect, use } from "react";

export default function PageDetails({ params }) {
  const { id } = use(params);
  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1")
      .then((response) => response.json())
      .then((data) => {
        setPelicula(data.find((pelicula) => pelicula["_id"] == id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="pelicula-details">
      <h2>{pelicula.title}</h2>

      {/* Imagen de la película */}
      <div className="pelicula-poster">
        <img src={pelicula.poster} alt={pelicula.title} />
      </div>

      <h3>Premios: {pelicula.awards?.text}</h3>

      <div className="info-container">
        <h3>Datos de Tomatoes:</h3>
        <p>Calificación del público: {pelicula.tomatoes?.viewer?.rating}</p>
        <p>Número de reseñas del público: {pelicula.tomatoes?.viewer?.numReviews}</p>
        <p>Calificación crítica: {pelicula.tomatoes?.critic?.rating}</p>
        <p>Número de reseñas críticas: {pelicula.tomatoes?.critic?.numReviews}</p>
        <p>Porcentaje de tomates frescos: {pelicula.tomatoes?.fresh}%</p>
      </div>
    </div>
  );
}
