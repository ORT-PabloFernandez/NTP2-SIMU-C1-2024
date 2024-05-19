import Movie from "./Movie";

import "./Movie.css";

export default function MovieList(props) {
    return (
        <ul className="movie-grid">
            {props.movies.map(movie => {
                return (
                    <Movie
                        Id={movie["_id"]}
                        title={movie.title}
                        poster={movie.poster}
                        fullplot={movie.fullplot}
                    />
                );
            }

            )}
            </ul>

    );
}