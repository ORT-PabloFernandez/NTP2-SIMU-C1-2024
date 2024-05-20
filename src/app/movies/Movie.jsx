import "./movie.css";
import Link from "next/link";

export default function Movie(props) {
  return (
    <li className="movie-item">
      <div className="card movie-item__content">
        <Link href={`/movies/${props.Id}`}>
          <div className="movie-item__info">
            <img src={props.Poster} alt="{props.Title}" />
            <h2>{props.Title}</h2>
          </div>
        </Link>
      </div>
    </li>
  );
}
