import { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addOrUpdateProduct } = useContext(ProductContext);

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);


  const validateForm = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'El nombre es obligatorio';
    if (!form.price || form.price <= 0) newErrors.price = 'El precio debe ser mayor a 0';
    if (!form.description.trim()) newErrors.description = 'La descripción es obligatoria';
    if (!form.category.trim()) newErrors.category = 'La categoría es obligatoria';
    if (!form.image.trim()) newErrors.image = 'La URL de imagen es obligatoria';
    return newErrors;
  };

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
  const formErrors = validateForm();
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    setValidated(true);
    return;
  }

  setErrors({});
  setValidated(false);

    addOrUpdateProduct({ ...form, id: id ? parseInt(id) : undefined });
  navigate('/');
};

return (
    <Container>
      <h2>{id ? 'Editar Producto' : 'Crear Producto'}</h2>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="title"
            value={form.title}
            onChange={handleChange}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            isInvalid={!!errors.price}
          />
          <Form.Control.Feedback type="invalid">
            {errors.price}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            name="description"
            value={form.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type="invalid">
            {errors.description}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            name="category"
            value={form.category}
            onChange={handleChange}
            isInvalid={!!errors.category}
          >
            <option value=""                > Seleccione una categoría</option>
            <option value="men's clothing"  > men's clothing          </option>
            <option value="jewelery"        > jewelery                </option>
            <option value="electronics"     > electronics             </option>
            <option value="women's clothing"> women's clothing        </option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.category}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Imagen (URL)</Form.Label>
          <Form.Control
            name="image"
            value={form.image}
            onChange={handleChange}
            isInvalid={!!errors.image}
          />
          <Form.Control.Feedback type="invalid">
            {errors.image}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className="mt-3">Guardar</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
