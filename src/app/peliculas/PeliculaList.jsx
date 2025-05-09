import Pelicula from "./Pelicula";

export default function PeliculaList(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {props.Peliculas.map((pelicula) => {
        return (
          <Pelicula
            key={pelicula["_id"]}
            Id={pelicula["_id"]}
            Poster={pelicula["poster"]}
            Title={pelicula.title}
            FullPlot={pelicula.fullplot}
          />
        );
      })}
    </div>
  );
}
