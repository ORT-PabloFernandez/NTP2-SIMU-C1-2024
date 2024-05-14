import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>BIENVENIDOS A LA LISTA DE PELÍCULAS</h1>
      <Link href="/movies">
        <button style={{ fontSize: "1.2rem", color: "#007bff", backgroundColor: "transparent", border: "none", cursor: "pointer" }}>Ver películas</button>
      </Link>
    </div>
  );
}
