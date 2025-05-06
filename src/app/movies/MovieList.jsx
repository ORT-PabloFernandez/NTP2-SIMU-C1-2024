import Movie from "./Movie";

function MovieList(props) {
    console.log("movies contiene:", props.movies)
    return (
        <>
        <h3 className="headerMovieList">Lista de películas</h3>
        {props.movies.map(movie => (
            <Movie
            key={movie._id}
            movie={movie}
        />
        ))}
        </>
    )
}

export default MovieList