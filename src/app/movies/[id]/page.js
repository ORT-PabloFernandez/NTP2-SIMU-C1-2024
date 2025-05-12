"use client";
import { useEffect, useState, use } from 'react';
import './MovieContainer.css';

export default function MovieDetail({params}) {
  console.log("hasta aca estoy e");
  const {id} = (params);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
        "https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1"
    ).then((response) => response.json())
    .then((data) => {
        setMovie(data.find(movie => movie["_id"] == id));
        console.log("llegue aca compaaa")
    })
.catch(error => console.log(error));
}, []);

  if (!movie) return <p>Cargando...</p>;

  return ( 
    <>
    <header class="main-header">
    <div class="container">
      <h1>🎬 Movie Catalog</h1>
      <p>Discover amazing films all in one place</p>
    </div>
    </header>

    <main>
    <div class="movie-container">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <h3>Datos de Tomatoes:</h3>
      <p>Calificación del público: {movie.tomatoes?.viewer?.rating}</p>
      <p>Número de reseñas del público: {movie.tomatoes?.viewer?.numReviews}</p>
      <p>Calificación crítica: {movie.tomatoes?.critic?.rating}</p>
      <p>Número de reseñas críticas: {movie.tomatoes?.critic?.numReviews}</p>
      <p>Porcentaje de tomates frescos: {movie.tomatoes?.fresh}%</p>

      <a href="javascript:history.back()" class="btn-back">← Go Back</a>
    </div>
    </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Movie Catalog. All rights reserved.</p>
    </div>
  </footer>
    

    </>
  );
}
