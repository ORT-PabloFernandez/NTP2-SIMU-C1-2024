"use client";
import { useState, useEffect, use } from "react";
export default function PageDetails({params}){
    const {id} = params;
    const [pelicula, setPelicula] = useState([]);

    useEffect(() => {
        fetch(
            "https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1"
        )
        .then((response) => response.json())
        .then((data) => {
            setPelicula(data.find(pelicula => pelicula["_id"] == id));
        })
        .catch(error => console.log(error));
    }, []);
return(
    <>
     <img src={pelicula.poster} alt={pelicula.title} />
      <h3>{pelicula.fullplot}</h3>
      <div>
      {pelicula.awards && (
           <div>
               <h2>Premios</h2>
               <p>Ganados: {pelicula.awards.wins}</p>
               <p>Nominaciones: {pelicula.awards.nominations}</p>
               <p>Detalles: {pelicula.awards.text}</p>
           </div>
       )}
        </div>
        <div>
      {pelicula.tomatoes && (
           <div>
               <h2>Puntuación de la Crítica (Tomatoes)</h2>
               {pelicula.tomatoes.critic && (
                   <div>
                       <h3>Críticos</h3>
                       <p>Rating: {pelicula.tomatoes.critic.rating}</p>
                       <p>Número de Reviews: {pelicula.tomatoes.critic.numReviews}</p>
                       <p>Meter: {pelicula.tomatoes.critic.meter}%</p>
                   </div>
               )}
               <h2>Puntuación de la Audiencia (Viewer)</h2>
               <p>Rating: {pelicula.tomatoes.viewer.rating}</p>
               <p>Número de Reviews: {pelicula.tomatoes.viewer.numReviews}</p>
               <p>Meter: {pelicula.tomatoes.viewer.meter}%</p>
           </div>
       )}
        </div>
      
    </>
);
}