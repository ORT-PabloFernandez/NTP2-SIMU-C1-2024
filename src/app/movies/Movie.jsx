import Link from "next/link";

export default function Movie(props) {
  return (
    <div className="flex flex-col items-center">
      <li className="flex flex-col overflow-hidden rounded shadow-lg m-4 w-full max-w-md">
        <Link href={`/movies/${props.id}`}>
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={props.poster} alt={props.title} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{props.title}</div>
              <p className="text-gray-700 text-base">
                {props.plot}
              </p>
            </div>
        </Link>
      </li>
    </div>
  );
}