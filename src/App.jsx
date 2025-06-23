import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ProductProvider } from './context/ProductContext';
import { AuthProvider }    from './context/AuthContext';

import ProductForm         from './components/ProductForm';
import NavBar              from './components/NavBar';

import RoleRoute           from './routes/RoleRoute';

import Home                from './pages/Home';
import Favorites           from './pages/Favorites';
import Inactive            from './pages/Inactive';
import ProductDetail       from './pages/ProductDetail';
import Nosotros            from './pages/Nosotros';
import Login               from './pages/Login';


function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/favorites"     element=
              {
                <RoleRoute allowedLevel="user"> 
                  <Favorites /> 
                </RoleRoute>
              }
            />
            <Route path="/product/:id"   element={<ProductDetail />} />
            <Route path="/inactive"      element=
              {
                <RoleRoute allowedLevel="admin"> 
                  <Inactive /> 
                </RoleRoute>
              }
            />
            <Route path="/create"        element=
              {
                <RoleRoute allowedLevel="admin"> 
                  <ProductForm /> 
                </RoleRoute>
              }
            />
            <Route path="/nosotros"      element={<Nosotros/>} />
            <Route path="/login"         element={<Login />  } />
            <Route path="/modificar/:id" element=
              {
                <RoleRoute allowedLevel="admin"> 
                  <ProductForm />
                </RoleRoute>
              } 
            />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;