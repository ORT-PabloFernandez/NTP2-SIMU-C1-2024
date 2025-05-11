"use client";
import { useState, useEffect } from "react";
import Peliculas from "./Peliculas";

export default function PeliculasPage() {
        
    const [peliculas, setPeliculas] = useState([]);
    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1")
            .then((response) => response.json())
            .then((data) => {
                setPeliculas(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Peliculas peliculas={peliculas} />
        </>
    );
}
