import Link from "next/link";

export default function Pelicula(props) {
  return (
<a href={`/peliculas/${props.Id}`} className="group relative block bg-black">
  <img
   src={props.Poster} alt="{props.Title}"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-xl font-bold text-white sm:text-2xl">{props.Title}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        {props.FullPlot}
        </p>
      </div>
    </div>
  </div>
</a>
  );
}

