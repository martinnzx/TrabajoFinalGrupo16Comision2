import { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addOrUpdateProduct } = useContext(ProductContext);

  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      const product = products.find(p => p.id == id);
      if (product) {
        setForm(product);
      }
    }
  }, [id, products]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addOrUpdateProduct({ ...form, id: id ? parseInt(id) : undefined });
    navigate('/');
  };

  return (
    <Container>
      <h2>{id ? 'Editar Producto' : 'Crear Producto'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="title" value={form.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio</Form.Label>
          <Form.Control name="price" value={form.price} onChange={handleChange} type="number" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control name="description" value={form.description} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoría</Form.Label>
          <Form.Control name="category" value={form.category} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen (URL)</Form.Label>
          <Form.Control name="image" value={form.image} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" className="mt-3">Guardar</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;