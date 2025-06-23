import { useContext }     from 'react';
import { Card, Button }   from 'react-bootstrap';
import { Link }           from 'react-router-dom';
import { useNavigate }    from 'react-router-dom';

import { ProductContext } from '../context/ProductContext';
import { useAuth }        from '../context/AuthContext';

const ProductCard = ({ product }) => {
  const { toggleFavorite, toggleInactive, favorites, inactive } = useContext(ProductContext);
  const isFavorite = favorites.includes(product.id);
  const isInactive = inactive.includes(product.id);
  const { user}    = useAuth();
  const navigate   = useNavigate();

  return (
    <Card className="CardProd d-flex flex-column" style={{ width: 200, marginBottom: '20px' }}>
      <Card.Img variant="top" src={product.image} height="150"/>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{product.title.slice(0, 30)}...</Card.Title>
          <Card.Text>{product.description.slice(0, 30)}...</Card.Text>
        </div>

        <div className="mt-auto d-grid gap-2">

          <Link to={`/product/${product.id}`} className="btn btn-info">
            Detalles
          </Link>

          {user?.level === 'user' && (
            <Button
              variant={isFavorite ? 'danger' : 'primary'}
              onClick={() => toggleFavorite(product.id)}
            >
              {isFavorite ? '- favoritos' : '+ favoritos'}
            </Button>
          )}

          {user?.level === 'admin' && (
            <Button variant='warning' onClick={() => navigate(`/modificar/${product.id}`)}>
              Modificar
            </Button>
          )}

          {user?.level === 'admin' && (
            <Button
              variant={isInactive ? 'secondary' : 'danger'}
              onClick={() => toggleInactive(product.id)}
            >
              {isInactive ? 'Restaurar' : 'Borrar'}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;