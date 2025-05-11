"use client";
import { useState, useEffect } from "react";
import PeliculaList from "./PeliculaList.jsx";
export default function PeliculaPage() {
    const [peliculas,setPeliculas] = useState([]);
    useEffect(() => {
        fetch(
            "https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1"
        ).then((response) => response.json())
        .then((data) =>{
            setPeliculas(data)
        })
        .catch(error => console.log(error));
    },[]);

    return (
        <>
            <PeliculaList Peliculas={peliculas}/>
        </>
    )
}