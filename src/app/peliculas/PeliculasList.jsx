import Pelicula from "./Pelicula";

export default function PeliculasList(props) {
  return (
    <ul>
      {props.Peliculas.map((pelicula) => {
        return (
          <Pelicula
            Id={pelicula["_id"]}
            Poster={pelicula["poster"]}
            Title={pelicula.title}
            FullPlot={pelicula.fullplot}
          />
        );
      })}
    </ul>
  );
}
