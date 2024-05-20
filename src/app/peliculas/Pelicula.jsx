import Link from "next/link";

export default function Pelicula(props) {
  return (
    <>
      <li>
        <div>
          <Link href={`/peliculas/${props.Id}`}>
            <div>
              <h1>{props.Title}</h1>
            </div>
            <div>
              <img src={props.Poster} />
            </div>
          </Link>
        </div>
      </li>
    </>
  );
}
