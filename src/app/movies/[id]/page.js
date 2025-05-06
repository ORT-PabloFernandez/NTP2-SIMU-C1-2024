"use client"
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

function Tomatoes({tomatoes}) {
    console.log("tomatoes", tomatoes)
    if(tomatoes != undefined) {
        return (
            <div>
                <h3>Tomatoes:</h3>
                <ul>
                    <li>Viewer rating: {tomatoes.viewer.rating} ({tomatoes.viewer.numReviews} reviews)</li>
                    <li>Critic rating: {tomatoes.critic.rating} ({tomatoes.critic.numReviews} reviews)</li>
                </ul>
            </div>  
        )
    }
}

export default function PageDetails() {
    const {id} = useParams()
    const [movie, setMovie] = useState([])

    const urlMovies = "https://mflixbackend.azurewebsites.net/api/movies"

    useEffect(() => {
        fetch(urlMovies)
        .then((response) => response.json())
        .then((data) => {
            setMovie(data.find(m => m._id == id));
        })
        .catch(error => console.log(error));
    }, []);

    const awards = movie.awards == undefined ? "No awards" : movie.awards.text
    const tomatoes = movie.tomatoes

    return(
        <div className="movieCard">
            <div className="img-container">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="moviePoster"
                />
            </div>
            <div className="movieCard-content">
                <h2 className="movieTitle">{movie.title}</h2>
                <h3 className="fullplot">{movie.fullplot}</h3>
                <h3 className="awards">Awards: {awards}</h3>
            </div>
            <Tomatoes tomatoes={tomatoes}/>
            
        </div>
    )

}