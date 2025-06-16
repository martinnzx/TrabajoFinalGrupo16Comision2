import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Inactive = () => {
  const { products, inactive } = useContext(ProductContext);

  return (
    <div className="d-flex flex-wrap">
      {products
        .filter((product) => inactive.includes(product.id))
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Inactive;