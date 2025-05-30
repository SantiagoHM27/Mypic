interface HomeProps {
  setPantalla: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home({ setPantalla }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
          ¡Bienvenido a <span className="text-yellow-300">MyPic</span>!
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Tu espacio para compartir, descubrir y vender fotografías únicas.  
          Crea, conecta e inspira con cada imagen.
        </p>
      </div>
    </div>
  );
}
