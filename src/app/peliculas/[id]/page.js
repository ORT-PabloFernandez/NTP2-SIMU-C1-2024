"use client";
import {useState, useEffect, useInsertionEffect } from "react";

export default function PeliculaDetails({ params }) {
  const { id } = params;
  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    fetch("https://mflixbackend.azurewebsites.net/api/movies")
      .then((response) => response.json())
      .then((data) => setPelicula(data.find((pel) => pel._id == id)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="movie-details">
      <img src={pelicula.poster} alt={pelicula.title}/>
      <h1>{pelicula.title}</h1>
      <p>{pelicula.fullplot}</p>
    </div>
  );
}
