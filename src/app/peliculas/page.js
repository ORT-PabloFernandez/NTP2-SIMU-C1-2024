"use client";
import { useState, useEffect } from 'react'
import ListaPeliculas from './ListaPeliculas'

export default function pagePeliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=50&page=1")
      .then(response => response.json())
      .then(data => setPeliculas(data))
      .catch(error => console.error(error));
  }, []);

  console.log(peliculas);

  return (
    <ListaPeliculas Peliculas={peliculas} />
  )

}
