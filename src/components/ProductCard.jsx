import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';

const ProductCard = ({ product }) => {
  const { toggleFavorite, toggleInactive, favorites, inactive } = useContext(ProductContext);
  const isFavorite = favorites.includes(product.id);
  const isInactive = inactive.includes(product.id);

  return (
    <Card className="shadow-sm rounded-4 mb-4" style={{ width: '100%', maxWidth: '260px' }}>
      <Card.Img
        variant="top"
        src={product.image}
        height="160"
        style={{ objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
      />
      <Card.Body className="d-flex flex-column gap-2">
        <div>
          <Card.Title className="fs-5 text-truncate" title={product.title}>
            {product.title}
          </Card.Title>
          <Card.Text className="text-muted text-truncate" title={product.description}>
            {product.description}
          </Card.Text>
        </div>

        <Row className="g-1">
          <Col xs={12}>
            <Button
              variant={isFavorite ? 'danger' : 'primary'}
              onClick={() => toggleFavorite(product.id)}
              className="w-100"
            >
              {isFavorite ? '- Favoritos' : '+ Favoritos'}
            </Button>
          </Col>
          <Col xs={12}>
            <Button
              variant={isInactive ? 'secondary' : 'warning'}
              onClick={() => toggleInactive(product.id)}
              className="w-100"
            >
              {isInactive ? 'Restaurar' : 'Borrar'}
            </Button>
          </Col>
          <Col xs={6}>
            <Link to={`/product/${product.id}`} className="btn btn-info w-100">
              Detalles
            </Link>
          </Col>
          <Col xs={6}>
            <Button variant="danger" onClick={() => ProductForm(product)} className="w-100">
              Modificar
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
