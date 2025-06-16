import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import ProductDetail from './pages/ProductDetail';
import Inactive from './pages/Inactive';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/inactive" element={<Inactive />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;