import { useState, useEffect } from "react";
import peliculaList from "./PeliculasList";
  
  export default function peliculaPage() {
    const [peliculas, setpeliculas] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://mflixbackend.azurewebsites.net/api/movies"
      )
        .then((response) => response.json())
        .then((data) => {
          setpeliculas(data);
        })
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <>
        <PeliculaList peliculas={peliculas} />
      </>
    );
  }