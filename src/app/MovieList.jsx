import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {props.movies.map((movie) => (
        <Movie
          key={movie._id}
          title={movie.title}
          poster={movie.poster || "https://i.pinimg.com/564x/b1/99/52/b19952e5b5c86bfa1a909539519f438b.jpg"}
          fullplot={movie.fullplot ? movie.fullplot.substring(0, 50) : ""}
        />
      ))}
    </ul>
  );
}