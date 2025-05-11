import "./peliculas.css";
import Pelicula from "./Pelicula";

export default function Peliculas(props) {
  return (
    <ul className="peliculas-list">
      {props.peliculas.map((pelicula) => {
        return (
          <Pelicula
            key={pelicula["_id"]}
            ID={pelicula["_id"]}
            Title={pelicula.title}
            Plot={pelicula.fullplot}
            Poster={pelicula.poster}
          />
        );
      })}
    </ul>
  );
}