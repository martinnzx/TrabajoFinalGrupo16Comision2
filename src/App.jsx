import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import ProductDetail from './pages/ProductDetail';
import Inactive from './pages/Inactive';
import ProductForm from './components/ProductForm';
import Login from './pages/Login';
import NavBar from './components/NavBar';


function App() {
  return (
    <ProductProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/inactive" element={<Inactive />} />
          <Route path="/create" element={<ProductForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;