import React from "react";

function Pelicula(props) {
  return (
    <div className="flex flex-col items-center text-white p-4 transition:smooth-out rounded-lg shadow-md max-w-md mx-300 my-4 text-center transition-transform hover:scale-105">
      <h1 className="text-xl p-3 font-bold mb-2 uppercase">
        {props.title || "Título no disponible"}
      </h1>

      <img
        className="rounded-lg"
        width={300}
        height={300}
        alt={props.title || "Imagen"}
        src={props.poster || "ruta_de_imagen_de_respaldo.jpg"}
      />

      <p className="p-3 text-justify">
        {props.fullplot || "Resumen no disponible"}
      </p>
    </div>
  );
}

export default Pelicula;
