import Movie from "./Movie";
import './MovieCard.css';

export default function MovieList(props) {
  return (
  <>
    <header class="main-header">
    <div class="container">
      <h1>🎬 Movie Catalog</h1>
      <p>Explore our amazing collection of movies</p>
    </div>
  </header>

  <main>
    <div className="grid-container">
      {props.Movies.map((movie) => {
        return (
          <Movie
            key={movie["_id"]}
            ID={movie["_id"]}
            poster={movie.poster}
            title={movie.title}
            fullplot={movie.fullplot}
          />
        );
      })}
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Movie Catalog. All rights reserved.</p>
    </div>
  </footer>
  </>
  );
}