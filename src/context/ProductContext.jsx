import React, { createContext, useState, useEffect } from 'react';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inactive, setInactive] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const toggleInactive = (id) => {
    setInactive((prev) =>
      prev.includes(id) ? prev.filter((inact) => inact !== id) : [...prev, id]
    );
  };

  const addOrUpdateProduct = (product) => {
    if (product.id) {
      setProducts(products.map(p => (p.id === product.id ? product : p)));
    } else {
      const newProduct = { ...product, id: Date.now(), favorite: false, active: true };
      setProducts([...products, newProduct]);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        favorites,
        inactive,
        toggleFavorite,
        toggleInactive,
        addOrUpdateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
