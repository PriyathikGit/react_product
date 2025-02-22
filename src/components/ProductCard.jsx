import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/product/${id}`, { state: { product } });
  };

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
      <img src={product.image} alt={product.name} className="w-full h-50 object-contain" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <span className="flex">
        {Array.from({ length: product.rating }).map((_, idx) => (
          <Star fill="yellow" color="black-slate-100" key={idx} />
        ))}
      </span>
      <button 
        onClick={() => handleDetails(product.id)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
