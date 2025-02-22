import React from "react";
import { useProduct } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const Filter = () => {
  const { filterProductValue, searchQuery, setSearchQuery, searchedProducts } = useProduct();

  // Decide what products to display based on search query
  const productsToDisplay = searchQuery ? searchedProducts : filterProductValue.slice(0, 4);

  return (
    <div className="p-4 bg-gray-100">
      <div className="flex items-center gap-3 justify-end">
      <h2 className="text-lg font-semibold mb-4">Filter your product</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full max-w-3xs px-4 py-2 mb-4 border border-gray-00 rounded-md "
      />
      </div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
