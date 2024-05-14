import "./movie.css";
import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <ul className="movies-list">
      {props.Movies.map((movie) => {
        return (
          <Movie
            Id={movie["_id"]}
            Poster={movie["poster"]}
            Plot={movie["plot"]} 
            Title={movie["title"]}
            Fullplot={movie["fullplot"]} 
          />
        );
      })}
    </ul>
  );
}