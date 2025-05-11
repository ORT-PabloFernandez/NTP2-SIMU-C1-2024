"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirige a la página de peliculas después de que el componente se monte
    router.push("/peliculas");
  }, [router]); // La dependencia en 'router' es importante

  // Puedes mostrar un mensaje de carga brevemente si lo deseas
  return (
    <div>
      <h3>Redirigiendo a la página de películas...</h3>
    </div>
  );
}