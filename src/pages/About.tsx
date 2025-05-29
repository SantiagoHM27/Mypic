// src/components/About.tsx
import React from 'react';
import '../index.css'; // Importamos el archivo CSS global

function About() {
  return (
    // Ahora usamos los nombres de clase directamente como strings
    <div className="aboutContainer">
      <h1 className="title">Sobre Nosotros</h1>
      <p className="intro">
        ¡Bienvenido a <strong>FotoMarkt</strong>! La plataforma donde tu creatividad fotográfica encuentra su valor.
      </p>

      <div className="section">
        <h2 className="subtitle">Nuestra Misión 🚀</h2>
        <p>
          Conectamos a talentosos creadores de contenido visual como tú con marcas y empresas que buscan imágenes auténticas y frescas para sus campañas publicitarias. Creemos que cada foto cuenta una historia y tiene el potencial de inspirar.
        </p>
      </div>

      <div className="section">
        <h2 className="subtitle">¿Cómo funciona? 🤔</h2>
        <p>
          Es simple: comparte tus mejores momentos y fotografías en nuestra plataforma. Si una marca considera que tu imagen es perfecta para su mensaje, podrá adquirir los derechos de uso directamente a través de FotoMarkt. ¡Transforma tu pasión en una oportunidad!
        </p>
      </div>

      <div className="section">
        <h2 className="subtitle">Para Creadores 📸</h2>
        <ul className="list">
          <li>Muestra tu talento al mundo.</li>
          <li>Monetiza tus fotografías de una manera sencilla y segura.</li>
          <li>Mantén el control sobre tus creaciones.</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="subtitle">Para Marcas 🏢</h2>
        <ul className="list">
          <li>Accede a un banco de imágenes auténticas y diversas.</li>
          <li>Encuentra contenido visual único que resuene con tu audiencia.</li>
          <li>Colabora directamente con creadores emergentes.</li>
        </ul>
      </div>

      <p className="outro">
        Únete a nuestra comunidad y sé parte de la nueva era de la fotografía social y publicitaria.
      </p>
    </div>
  );
}

export default About;