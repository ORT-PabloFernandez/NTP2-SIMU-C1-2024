"use client";
import { useState, useEffect } from "react";

export default function PageDetailsMovie({ params }) {
    const { id } = params;

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1")
            .then(response => response.json())
            .then(data => {
                setMovie(data.find(mov => mov._id.toString() === id))
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="movie-id">
            <div className="movie-id-img">
                <img src={movie.poster}></img>
            </div >
            <div className="movie-id-info">
                <h2>{movie.title}</h2>
                <h3>{movie.fullplot}</h3>
            </div>
        </div>
    )


}