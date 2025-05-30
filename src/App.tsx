import { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home"; // Asegúrate de que esté en la ruta correcta

export default function App() {
  const [pantalla, setPantalla] = useState("inicio");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="bg-green-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPic</h1>
        <nav>
          <button onClick={() => setPantalla("inicio")} className="mr-4 hover:underline">
            Inicio
          </button>
          <button onClick={() => setPantalla("about")} className="mr-4 hover:underline">
            Acerca de
          </button>
          <button onClick={() => setPantalla("contact")} className="hover:underline">
            Contacto
          </button>
        </nav>
      </header>

      {/* Contenido dinámico */}
      <main className="p-6">
        {pantalla === "inicio" && <Home setPantalla={setPantalla} />}
        {pantalla === "about" && <About />}
        {pantalla === "contact" && <Contact />}
      </main>
    </div>
  );
}
