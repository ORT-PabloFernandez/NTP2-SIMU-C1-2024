import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <ul>
      {props.Movies.map((movie) => {
        return (
          <Movie
            Id={movie._id}
            UserName={movie.fullplot}
            Title={movie.title}
            Picture={movie.poster}
          />
        );
      })}
    </ul>
  );
}
