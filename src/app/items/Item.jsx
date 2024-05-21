
export default function Item(props) {
	return (
		<div>
			<li className="movie-item">
				<div className="movie-content">
						<div className="movie-details">
							<h2>{props.pens}</h2>
							<h2>{props.price}</h2>
							<h2>{props.quantity}</h2>
						</div>
				</div>
			</li>
		</div>
	);
}