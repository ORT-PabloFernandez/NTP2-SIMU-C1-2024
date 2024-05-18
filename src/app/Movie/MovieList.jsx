import "./movie.css";
import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <ul className="movies-list">
      {props.Peliculas.map((movie) => {
        return (
          <Movie
            Poster={movie["poster"]}
            Title={movie["title"]}
            Fullplot={movie["fullplot"]}
          />
        );
      })}
    </ul>
  );
}
