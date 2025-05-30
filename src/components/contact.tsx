export default function Contact() {
  return (
    <div className="min-h-screen bg-green-500 text-white flex flex-col">
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16">

        {/* Información de contacto */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Contactanos
          </h1>
          <p className="text-lg mb-6 leading-relaxed">
            Estamos para ayudarte. Podés enviarnos un mensaje, visitar nuestras oficinas o comunicarte directamente por nuestras redes sociales.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Información de contacto:</h2>
          <ul className="text-lg space-y-2">
            <li><strong>Dirección:</strong> Casa del buen lud</li>
            <li><strong>Teléfono:</strong> +52 1010101010</li>
            <li><strong>Email:</strong> pumalud101@gmail.com</li>
          </ul>

          <div className="mt-8">
            <a
              href="mailto:contacto@tuaplicacion.com"
              className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Enviar correo
            </a>
          </div>
        </div>

        {/* Mapa de Google */}
        <div className="lg:w-1/2 w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Un+Nuevo+Amanecer,+Cuaxamalucan+113-Interior+1,+Granjas+de+Guadalupe,+90320+Cdad.+de+Apizaco,+Tlax.&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>

      <footer className="text-center text-sm text-white/70 py-4 border-t border-white/20">
        &copy; {new Date().getFullYear()} TuAplicación. Todos los derechos reservados.
      </footer>
    </div>
  );
}
