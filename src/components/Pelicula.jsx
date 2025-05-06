export default function Pelicula({ pelicula }) {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:cursor-pointer transition duration-300 hover:-translate-y-2 active:brightness-90 max-w-xs mx-auto">
      <img
        src={pelicula.poster}
        alt={pelicula.title}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{pelicula.title}</h3>
        <p className="text-sm text-gray-700 line-clamp-4">{pelicula.fullplot}</p>
      </div>
    </div>
  );
}
