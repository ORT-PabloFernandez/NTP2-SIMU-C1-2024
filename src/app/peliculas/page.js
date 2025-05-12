import ListadoPeliculas from "@/components/ListadoPeliculas";

export default function PagePeliculas() {
    return (
      <div className="text-center pt-8 pb-8 bg-gray-900">
        <h1 className="text-4xl font-calsans tracking-wide text-white">Listado de películas</h1>
        <ListadoPeliculas />
      </div>
    );
  }