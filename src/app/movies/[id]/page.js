"use client";
import { useState, useEffect } from "react";

export default function PageDetails({ params }) {
  const { id } = params;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.find((movie) => movie._id === id));
      })
      .catch((error) => console.log(error));
  }, []);

return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden max-w-md">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={movie.poster} alt={movie.title} />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold leading-7 text-black sm:text-3xl sm:leading-9 sm:truncate">
          {movie.title}
        </h2>
        <div className="mt-2 text-base text-gray-500">
          {movie.plot}
        </div>
        <div className="mt-2 text-base text-gray-500">
          {movie.fullplot}
        </div>
      </div>
    </div>
  </div>
);
}