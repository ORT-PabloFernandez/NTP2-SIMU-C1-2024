import Pelicula from "./Pelicula";

function ListaPeliculas(props) {
  return (
    <div className="grid grid-cols-3 py-5 gap-3">
      {props.Peliculas.map(pelicula => (
        <Pelicula
          key={pelicula.title}
          title={pelicula.title}
          fullplot={pelicula.fullplot}
          poster={pelicula.poster}
        />
      ))}
    </div>
  );
}

export default ListaPeliculas;
