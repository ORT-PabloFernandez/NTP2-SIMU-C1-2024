import "./Movie/movie.css";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/Movie" className="movies-list center">
      <button className="pagination-button">Ver peliculas</button>
    </Link>
  );
}
