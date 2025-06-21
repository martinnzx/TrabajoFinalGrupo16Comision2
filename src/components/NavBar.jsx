import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="shadow-sm mb-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          🛍️ TiendaMia UnJu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favoritos</Nav.Link>
            <Nav.Link as={Link} to="/inactive">Inactivos</Nav.Link>
            <Nav.Link as={Link} to="/create">Crear</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
