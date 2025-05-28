
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título de la sección About */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8 leading-tight">
          Sobre MyPic
        </h1>

        {/* Descripción del proyecto */}
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
          Bienvenido a **MyPic**, la plataforma social que redefine la forma en que el contenido visual conecta a creadores y marcas.
        </p>

        <div className="bg-white p-8 rounded-xl shadow-2xl space-y-6 text-left">
          {/* Misión y enfoque */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
          <p className="text-lg text-gray-800">
            En MyPic, creemos en el poder de la imagen. Nuestra red social está **enfocada en contenido visual**, permitiendo a los usuarios compartir sus fotografías al estilo de Instagram, pero con un propósito ampliado.
          </p>

          {/* Funcionalidad clave: Conexión creador-marca */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pt-4 border-t border-gray-200">Impulsando Oportunidades</h2>
          <p className="text-lg text-gray-800">
            Lo que nos hace únicos es nuestra funcionalidad innovadora: **conectamos a creadores con marcas y empresas**, permitiéndoles comprar imágenes directamente desde la plataforma para usarlas en sus campañas publicitarias. Esto facilita **acuerdos legales y pagos seguros**, abriendo nuevas vías económicas para nuestros usuarios.
          </p>

          {/* Valor y propósito */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pt-4 border-t border-gray-200">Un Entorno Creativo y Profesional</h2>
          <p className="text-lg text-gray-800">
            MyPic es más que una simple red social; es un ecosistema vibrante donde la creatividad florece y se transforma en valor. Fomentamos un **entorno profesional** donde los talentos visuales pueden monetizar su arte y las marcas encuentran el contenido auténtico y de alta calidad que necesitan.
          </p>
        </div>

        {/* Pequeña mención al equipo (opcional) */}
        <p className="mt-12 text-md text-gray-500">
          MyPic es un proyecto desarrollado con pasión y dedicación.
        </p>
      </div>
    </div>
  );
};

export default About;