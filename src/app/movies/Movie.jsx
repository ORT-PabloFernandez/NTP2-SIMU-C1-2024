import "./Movie.css";
import Link from "next/link";
export default function Movie(props) {
	return (
		<li className="movie-item">
			<div className="movie-content">
				
				<div className="movie-poster">
					<img src={props.poster} alt="{props.title}" className="movie-poster-image" />
					</div>
				<div className="movie-details">
					<h2 className="movie-title">{props.title}</h2>
					<h2 className="movie-plot">{props.fullplot}</h2>
					<Link href={`/movies/${props.Id}`}>
						<button className="details-button">Mas informacion</button>
					</Link>
					</div>
			
			</div>
				</li>
	);
}