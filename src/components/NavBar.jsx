import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/favorites">Favoritos</Link>
      <Link to="/inactive">Inactivos</Link>
      <Link to="/create">Crear</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default NavBar;