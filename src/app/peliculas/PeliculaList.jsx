import "./peliculas.css";
import Pelicula from "./Pelicula";
export default function PeliculaList(props){
    return(
        <ul className="users-list">
            {props.Peliculas.map((pelicula) => {
                return (
                <Pelicula
                    key={pelicula["_id"]}
                    ID={pelicula["_id"]}
                    title={pelicula.title}
                    poster={pelicula.poster}
                />
                );
            })}
    </ul>

    );


}