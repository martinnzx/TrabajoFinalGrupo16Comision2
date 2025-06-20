import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';

const ProductCard = ({ product }) => {
  const { toggleFavorite, toggleInactive, favorites, inactive } = useContext(ProductContext);
  const isFavorite = favorites.includes(product.id);
  const isInactive = inactive.includes(product.id);

  return (
    <Card style={{ width: 200, marginBottom: '20px' }}>
      <Card.Img variant="top" src={product.image} height="150"/>
      <Card.Body>
        <Card.Title>{product.title.slice(0, 30)}...</Card.Title>
        <Card.Text>{product.description.slice(0, 30)}...</Card.Text>
        <Button variant={isFavorite ? 'danger' : 'primary'} onClick={() => toggleFavorite(product.id)} style={{ marginLeft: 2 }}>
          {isFavorite ? '- favoritos' : '+ favoritos'}
        </Button>
        <Button variant={isInactive ? 'secondary' : 'warning'} onClick={() => toggleInactive(product.id)} style={{ marginLeft: 2 }}>
          {isInactive ? 'Restaurar' : 'Borrar'}
        </Button>
        <Link to={`/product/${product.id}`} className="btn btn-info" style={{ marginLeft: 2 }}>
          Detalles
        </Link>
        <Button variant='danger' onClick={() => ProductForm(product)} style={{ marginLeft: 2 }}>
          Modificar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;




