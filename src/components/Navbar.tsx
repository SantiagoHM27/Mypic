import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca</Link>
      <Link to="/contact">Contacto</Link>
    </div>
  );
}

export default Navbar;
