import ProductGrid from "../components/ProductGrid";

const Listing = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Product Listing</h1>
      <ProductGrid />
    </div>
  );
};

export default Listing;