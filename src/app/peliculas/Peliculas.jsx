import Pelicula from "./Pelicula.jsx";

export default function Peliculas(props) {
  return (
    <>
      <ul>
        {props.Peliculas.map((pelicula) => {
          return (
            <Pelicula
              Id={pelicula._id}
              Poster={pelicula.poster}
              Title={pelicula.title}
            />
          );
        })}
      </ul>
    </>
  );
}
