import "./peliculas.css";
import Link from "next/link";

export default function Pelicula(props) {
  return (
    <li className="user-item">
      <div className="card user-item__content">
        <Link href={`/peliculas/${props.ID}`}>
          {/* Póster de la película */}
          <div className="pelicula-item__image">
            <img src={props.Poster} alt={props.Title} />
          </div>
          {/* Título y descripción */}
          <div className="user-item__info">
            <h2>{props.Title}</h2>
            <p>{props.Plot}</p>
          </div>
        </Link>
      </div>
    </li>
  );
}
