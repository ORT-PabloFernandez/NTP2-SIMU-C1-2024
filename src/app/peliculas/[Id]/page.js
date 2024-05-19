"use client";
import { useState, useEffect } from "react";
export default function PeliculaDetails({ params }) {
  const { id } = params;

  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=50&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setPelicula(data.find((pelicula) => pelicula["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
        <>
          <img src={pelicula.poster} alt={pelicula.title} />
          <h3>{pelicula.title}</h3>
          <p>{pelicula.fullplot}</p>
       </>  
  );
}
