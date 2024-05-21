"use client"

import { useState, useEffect } from "react";

export default function PageItemDetails({ params }) {

 
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://salesbackend.azurewebsites.net/api/sales")
            .then(
                (response) => response.json()
            )
            .then((data) => {
                console.log(data);
                setItems(data);
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div className="movie-item">
            <h3 className="movie-title">{items["pens"]}</h3>
            <h3 className="movie-title">{items["price"]}</h3>
            <h3 className="movie-plot">{items["quantity"]}</h3>
        </div>
    );
}