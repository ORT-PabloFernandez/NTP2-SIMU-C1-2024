import "./movie.css";
import Link from "next/link";

export default function Movie(props) {
  return (
    <li className="movie-item">
      <div className="card ">
        <div className="movie-item__info avatar">
          <img src={props.Poster} />
          <h2>{props.Title || "Título no disponible"}</h2>
          <p>{props.Fullplot || "Resumen no disponible"} </p>
        </div>
      </div>
    </li>
  );
}
