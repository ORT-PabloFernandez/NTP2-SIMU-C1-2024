import Link from "next/link";
import './MovieCard.css';

export default function movie(props){
    return (
            <div className="movie-card">
                <Link href={`/movies/${props.ID}`}>
                    <img src={props.poster} alt={props.title} />
                     <h2>{props.title}</h2>
                     <p>{props.fullplot}</p>
                </Link>
            </div>
    );
}