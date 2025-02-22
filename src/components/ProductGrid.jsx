import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useProduct } from "../context/ProductContext";

const ProductGrid = () => {
  const { productData } = useProduct();
  const location = useLocation();
  const res = location.state?.results || [];
  const [filterQuery, setFilterQuery] = useState("");

  // Determine which data to filter
  const productsToFilter = res.length > 0 ? res : productData;

  // Filter products based on input
  const filteredProducts = productsToFilter.filter(
    (product) =>
      product.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />

      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, i) => <ProductCard key={i} product={product} />)
        ) : (
          <p className="text-center col-span-4">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
