import { notFound } from "next/navigation";

export default async function DetallePelicula({ params }) {
  const { id } = params;

  const res = await fetch(
    `https://mflixbackend.azurewebsites.net/api/movies/${id}`
  );
  if (!res.ok) return notFound();

  const pelicula = await res.json();

  return (
    <div>
      <h1>{pelicula.title}</h1>
      <p>{pelicula.fullplot}</p>
      <div>
        <h2>Premios</h2>
        <p>{pelicula.awards?.text || "Sin información"}</p>
      </div>
      <div>
        <h2>Tomatoes</h2>
        <pre>{JSON.stringify(pelicula.tomatoes, null, 2)}</pre>
      </div>
    </div>
  );
}
