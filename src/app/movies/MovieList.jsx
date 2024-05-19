import Movie from "./Movie";


export default function MovieList(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 sm:m-6 md:m-8 lg:m-10">
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
    </div>
  );
}