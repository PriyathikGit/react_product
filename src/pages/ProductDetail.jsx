import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product || location.state?.results[0]; 
  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-20">Product Details</h1>
      <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-80 object-contain" />
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
