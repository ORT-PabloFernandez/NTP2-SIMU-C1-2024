import { useState, useEffect } from "react";
import Link from "next/link";

export default function Pelicula({ pelicula }) {
  const [imagenValida, setImagenValida] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = pelicula.poster;
    img.onload = () => setImagenValida(true);
    img.onerror = () => setImagenValida(false);
  }, [pelicula.poster]);

  return (
    <Link href={`peliculas/${pelicula._id}`}>
      <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:cursor-pointer transition duration-300 hover:-translate-y-2 active:brightness-90 min-h-[500px] flex flex-col">
        
        {imagenValida ? (
          <img
            src={pelicula.poster}
            alt={pelicula.title}
            className="w-full h-[350px] object-cover"
          />
        ) : (
          <div className="w-full h-[350px] bg-gray-300 flex items-center justify-center text-gray-600 text-center text-sm px-2 italic">
            📷 Imagen no disponible
          </div>
        )}

        <div className="p-4 h-[150px] flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-center font-calsans text-gray-900">{pelicula.title}</h3>
          <p className="text-sm text-gray-700 line-clamp-4 text-center">
            {pelicula.fullplot}
          </p>
        </div>
        
      </div>
    </Link>
  );
}
