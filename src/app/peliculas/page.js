"use client";
import { useState, useEffect } from "react";
import PeliculaList from "./PeliculaList";
//https://mflixbackend.azurewebsites.net/api/movies?pageSize=50&page=1
export default function PeliculaPage() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=50&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <PeliculaList Peliculas={peliculas} />
    </>
  );
}