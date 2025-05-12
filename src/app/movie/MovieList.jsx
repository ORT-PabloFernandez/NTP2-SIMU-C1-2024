import Movie from "./Movie";
import "./movie.css";

export default function MovieList(props){
    return(
        <ul className="movieList">
            {props.Movies.map((movie)=>{
                return(
                    <Movie
                        Key={movie._id}
                        ID={movie._id}
                        Poster={movie.poster}
                        Title={movie.title}
                        Fullplot={movie.fullplot}
                    />
                )
            })}

        </ul>
    );
}