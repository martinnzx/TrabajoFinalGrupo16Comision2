import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useNavigate }              from 'react-router-dom';
import { useAuth }                        from '../context/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar className="navbar" >
      <Container>
        <Navbar.Brand as={Link} to="/">
          🛍️ Inicio
        </Navbar.Brand>

        <Nav className="me-auto">
          {( user?.level==='user') && (
            <Nav.Link as={Link} to="/favorites">
              Favoritos
            </Nav.Link>
          )}

          {user?.level === 'admin' && (
            <Nav.Link as={Link} to="/inactive">
              Inactivos
            </Nav.Link>
          )}

          {user?.level === 'admin' && (
            <Nav.Link as={Link} to="/create">
              Nuevo
            </Nav.Link>
          )}

          <Nav.Link as={Link} to="/nosotros">
            Nosotros
          </Nav.Link>

        </Nav>

        <Nav>
          {user ? (
            <>
              <Navbar.Text className="me-2">Hola, {user.name}</Navbar.Text>
              <Button variant="outline-light" size="sm" onClick={handleLogout}>
                Salir
              </Button>
            </>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>

      </Container>
    </Navbar>
  );
};

export default NavBar;
