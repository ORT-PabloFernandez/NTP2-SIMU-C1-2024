import "./movie.css";
import Movie from "./Movie.jsx";

export default function MoviesList(props) {
  return (
    <ul className="movies-list">
      {props.Movies.map((movie) => {
        return (
          <Movie
            Id={movie["_id"]}
            Poster={movie["poster"]}
            Title={movie["title"]}
            FullPlot={movie["fullplot"]}
          />
        );
      })}
    </ul>
  );
}
