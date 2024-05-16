import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.Movies.map((movie) => (
        <Movie
          Poster={movie["poster"]}
          Title={movie["title"]}
          FullPlot={movie["fullplot"]}
        />
      ))}
    </div>
  );
}
