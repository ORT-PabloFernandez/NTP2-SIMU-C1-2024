import Link from "next/link"

export default function Movie(props) {
    const movie = props.movie
    const id = movie._id.toString()
    return(
        <div>
            <hr></hr>
            <br></br>
            <Link href={`/movies/${id}`}>
                <div className="movieCard">
                <div className="img-container">
                    <img
                        src={movie.poster}
                        alt={`poster de ${movie.title}`}
                        className="moviePoster"
                    />
                </div>
                <div className="movieCard-content">
                    <h2 className="movieTitle"><b>{movie.title}</b></h2>
                    <h3 className="fullplot">{movie.fullplot}</h3>
                </div>
            </div>
            </Link>
            <hr></hr>
            <br></br>
        </div>
    )
}