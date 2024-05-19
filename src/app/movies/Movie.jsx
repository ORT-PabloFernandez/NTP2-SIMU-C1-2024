import "./Movie.css";
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
					</div>
			</div>
				</li>
	);
}