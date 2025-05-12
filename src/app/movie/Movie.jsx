import Link from "next/link"
import "./movie.css";

export default function Movie(props) {
    
    return (
        <li className="movie">
                <Link href={`/movie/${props.ID}`}>
                    <div className="container-img">
                        <img src={props.Poster}></img>
                    </div>
                    <div className="container-info">
                        <h2 className="container-info-title">
                            {props.Title}
                        </h2>
                        <h3 className="container-info-fullplot">
                            {props.Fullplot}
                        </h3>
                    </div>
                </Link>
        </li>
    )
}