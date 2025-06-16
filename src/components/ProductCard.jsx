import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { toggleFavorite, toggleInactive, favorites, inactive } = useContext(ProductContext);
  const isFavorite = favorites.includes(product.id);
  const isInactive = inactive.includes(product.id);

  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant={isFavorite ? 'danger' : 'primary'} onClick={() => toggleFavorite(product.id)}>
          {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </Button>
        <Button variant={isInactive ? 'secondary' : 'warning'} onClick={() => toggleInactive(product.id)}>
          {isInactive ? 'Restaurar' : 'Inactivar'}
        </Button>
        <Link to={`/product/${product.id}`} className="btn btn-info">
          Ver detalles
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;