import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} width={200} alt={product.title} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
    </div>
  );
};

export default ProductDetail;