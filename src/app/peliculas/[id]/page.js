import { notFound } from "next/navigation";

export default async function DetallePelicula({ params }) {
  const { id } = params;

  const res = await fetch(
    `https://mflixbackend.azurewebsites.net/api/movies/${id}`
  );
  if (!res.ok) return notFound();

  const pelicula = await res.json();

  return (
    <div className="min-h-screen bg-gray-700 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="relative w-full h-[400px] overflow-hidden">
          <img
            src={pelicula.poster}
            alt={`Blur de ${pelicula.title}`}
            className="absolute top-0 left-0 w-full h-full object-cover blur-lg scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 h-full flex justify-between items-end px-10 pb-5">
            <h1 className="text-white text-5xl font-bold font-calsans drop-shadow-xl max-w-[60%]">
              {pelicula.title}
            </h1>
            <img
              src={pelicula.poster}
              alt={pelicula.title}
              className="w-60 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-700 mb-6">{pelicula.fullplot}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Premios
            </h2>
            <p className="text-gray-600">
              {pelicula.awards?.text || "Sin información"}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Tomatoes
            </h2>
            <div className="bg-gray-100 p-4 rounded">
              <p>
                <span className="font-semibold">Viewer Rating:</span>{" "}
                {pelicula.tomatoes?.viewer?.rating ?? "N/A"} ⭐
              </p>
              <p>
                <span className="font-semibold">Viewer Reviews:</span>{" "}
                {pelicula.tomatoes?.viewer?.numReviews ?? "N/A"}
              </p>
              <p>
                <span className="font-semibold">Critic Rating:</span>{" "}
                {pelicula.tomatoes?.critic?.rating ?? "N/A"} ⭐
              </p>
              <p>
                <span className="font-semibold">Critic Reviews:</span>{" "}
                {pelicula.tomatoes?.critic?.numReviews ?? "N/A"}
              </p>
              <p>
                <span className="font-semibold">Fresh:</span>{" "}
                {pelicula.tomatoes?.fresh ?? "N/A"}
              </p>
              <p>
                <span className="font-semibold">Rotten:</span>{" "}
                {pelicula.tomatoes?.rotten ?? "N/A"}
              </p>
              <p>
                <span className="font-semibold">Production:</span>{" "}
                {pelicula.tomatoes?.production ?? "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
