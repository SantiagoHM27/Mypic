export default function About() {
  return (
    <div className="min-h-screen bg-green-500 text-white flex flex-col">
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16">
        
        {/* Texto a la izquierda */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sobre nosotros
          </h1>
          <p className="text-lg leading-relaxed">
            Mypic es una red social donde puedes publicar tus imágenes 
            y permitir que marcas las descubran y las compren. 
            Conectamos a creadores visuales con oportunidades reales, 
            combinando creatividad, comunidad y comercio en un solo lugar.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/src/about.png"
            alt="Equipo"
            className="rounded-xl shadow-xl w-full max-w-md"
          />
        </div>
      </main>

      <footer className="text-center text-sm text-white/70 py-4 border-t border-white/20">
        &copy; {new Date().getFullYear()} MyPic. Todos los derechos reservados.
      </footer>
    </div>
  );
}
