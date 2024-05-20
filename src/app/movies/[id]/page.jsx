"use client"

import { useState, useEffect } from "react";

export default function PageMovieDetails({ params }) {

    const { id } = params;
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies`)
            .then(
                (response) => response.json()
            )
            .then((data) => {
                //console.log(data);
                setMovie(data.find((movie) => movie["_id"] === id));
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div className="movie-item">
        <div className="movie-poster">
            <img src={movie.poster} alt={movie.title} className="imageStyle" />
        </div>
            <h3 className="movie-title">{movie["title"]}</h3>
            <h3 className="movie-plot">{movie["fullplot"]}</h3>
        </div>
    );
}