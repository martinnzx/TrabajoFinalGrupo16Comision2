import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Nosotros() {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption className="caption-carrusel">
          <h1 className="texto-carrusel">Miranda Cesar German</h1>
          <h2 className="texto-carrusel">LU: APU6035</h2>
          <h2 className="texto-carrusel">DNI: 23.145.882</h2>
          <h3 className="texto-carrusel">Correo Electrónico: cesargermanmiranda@gmail.com</h3>
          <h3 className="texto-carrusel">Teléfono: (388)4888572</h3>
          <h4 className="texto-carrusel">Docente: Gustavo Sosa</h4>
          <h4 className="texto-carrusel">Programación Visual - Grupo 16</h4>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="/src/img/fi.jpg"
          alt="Primera diapositiva"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="caption-carrusel">
          <h1 className="texto-carrusel">Gallo Lucas Tiziano</h1>
          <h2 className="texto-carrusel">LU: APU6004</h2>
          <h2 className="texto-carrusel">DNI: 46.596.691</h2>
          <h3 className="texto-carrusel">Correo Electrónico: tizianogallo157@gmail.com</h3>
          <h3 className="texto-carrusel">Teléfono: (388)4808263</h3>
          <h4 className="texto-carrusel">Docente: Gustavo Sosa</h4>
          <h4 className="texto-carrusel">Programación Visual - Grupo 16</h4>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="/src/img/fi.jpg"
          alt="Segunda diapositiva"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="caption-carrusel">
          <h1 className="texto-carrusel">Mamani Mariano Martin</h1>
          <h2 className="texto-carrusel">LU: APU6028</h2>
          <h2 className="texto-carrusel">DNI: 44.349.895</h2>
          <h3 className="texto-carrusel">Correo Electrónico: martinnxz@gmail.com</h3>
          <h3 className="texto-carrusel">Teléfono: (388)5892830</h3>
          <h4 className="texto-carrusel">Docente: Gustavo Sosa</h4>
          <h4 className="texto-carrusel">Programación Visual - Grupo 16</h4>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="/src/img/fi.jpg"
          alt="Tercera diapositiva"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="caption-carrusel">
          <h1 className="texto-carrusel">Lozano Diego Valentin</h1>
          <h2 className="texto-carrusel">LU: APU6081</h2>
          <h2 className="texto-carrusel">DNI: 47.122.713</h2>
          <h3 className="texto-carrusel">Correo Electrónico: diegovalentinlozano@gmail.com</h3>
          <h3 className="texto-carrusel">Teléfono: (388)4469115</h3>
          <h4 className="texto-carrusel">Docente: Gustavo Sosa</h4>
          <h4 className="texto-carrusel">Programación Visual - Grupo 16</h4>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="/src/img/fi.jpg"
          alt="Cuarta diapositiva"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/img/fi.jpg"
          alt="Quinta diapositiva"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Nosotros;
