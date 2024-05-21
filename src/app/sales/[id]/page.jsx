"use client"

import { useState, useEffect } from "react";

export default function PageClientDetails({ params }) {

    const { id } = params;
    const [sales, setSales] = useState([]);

    useEffect(() => {
        fetch("https://salesbackend.azurewebsites.net/api/sales")
            .then(
                (response) => response.json()
            )
            .then((data) => {
                console.log(data);
                setSales(data.find((sales) => sales["_id"] === id));
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div className="movie-item">
            <h3 className="movie-title">{sales["gender"]}</h3>
            <h3 className="movie-plot">{sales["age"]}</h3>
            <h3 className="movie-plot">{sales["email"]}</h3>
            <h3 className="movie-plot">{sales["satisfaccion"]}</h3>

        </div>
    );
}