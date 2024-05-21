import "./Sales.css";
import Link from "next/link";
export default function Sale(props) {
	return (
		<div>
			<li className="movie-item">
				<div className="movie-content">
					<Link href={`/sales/${props.id}`}>
					<div className="movie-details">
						<h2>{props.saleDate}</h2>
						<h2>{props.storeLocation}</h2>
							<h2>{props.purchaseMethod}</h2>

						</div>
					</Link>
				</div>
			</li>
		</div>
	);
}