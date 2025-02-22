import React, { createContext, useState } from 'react';
import productData from '../../products.json';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Initially, show only the first product of each brand
  const filterProductValue = Object.values(
    productData.reduce((acc, product) => {
      if (!acc[product.brand]) {
        acc[product.brand] = product;
      }
      return acc;
    }, {})
  );

  // Filtered products based on search
  const searchedProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ProductContext.Provider value={{ productData, filterProductValue, searchQuery, setSearchQuery, searchedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => React.useContext(ProductContext);
