import Movie from "./Movie";


export default function MovieList(props) {
  return (
    <ul className="movies-list">
      {props.movies.map((movie) => {
        return (
          <Movie
            key={movie._id}
            id={movie._id}
            title={movie.title}
            poster={movie.poster}
            fullplot={movie.fullplot}
          />
        );
      })}
    </ul>
  );
}