import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1 class="h2">
            Bienvenido a la lista de las películas que seguro querrás ver
          </h1>
          <Link href={"/movies"}>
            <button class="btn btn-primary">Revisar peliculas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
