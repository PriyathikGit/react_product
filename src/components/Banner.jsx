import { useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../public/product/banner-img.png";
import { Search } from "lucide-react";
import { useProduct } from "../context/ProductContext";

const Banner = () => {
  const { productData } = useProduct();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // Store filtered products
  const navigate = useNavigate();

  // Handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filteredResults = productData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
      navigate(`/listing?search=${searchQuery}`, { state: { results: filteredResults } });
    }
  };

  // Handle input change and show suggestions
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      const filteredSuggestions = productData.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  // Select suggestion
  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion.name);
    setSuggestions([]);
    setSearchResults([suggestion]); // Store the selected product
  
    // Navigate with product ID and state
    navigate(`/product/${suggestion.name}`, { state: { results: [suggestion] } });
  };

  return (
    <div
      className="py-10 relative md:h-[60rem]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(95, 33, 113, 1) 100%)",
      }}
    >
      <div className="w-full absolute flex justify-center z-20">
        <input
          type="text"
          placeholder="Search for products..."
          className="max-w-2xl md:w-xl px-4 py-2 rounded-l-md focus:outline-none border border-white text-white"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
          <Search />
        </button>
        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute top-full w-[33%] bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-50">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="h-full flex flex-col-reverse justify-end items-center pt-20 mx-auto relative max-w-[calc(100%-20px)] md:flex-row md:max-w-[1200px]">
        <div className="text-white flex flex-col items-center text-center md:absolute md:top-1/2 md:left-12 md:translate-y-[-50%] lg:left-0">
          <h1 className="text-[80px] font-extrabold leading-none mb-5 md:text-[180px]">BOAT</h1>
          <p className="max-w-[300px] text-sm leading-5 mb-5 md:max-w-[500px] md:text-lg md:mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div className="flex justify-center gap-5">
            <div className="uppercase text-sm font-medium border-2 border-white px-5 py-2 cursor-pointer hover:opacity-50">
              Read more
            </div>
            <div className="uppercase text-sm font-medium bg-white text-black px-5 py-2 cursor-pointer hover:opacity-50">
              Shop now
            </div>
          </div>
        </div>
        <img
          className="relative mb-5 z-10 w-[200px] md:w-[380px] md:mr-16 md:mt-12 md:mb-12 lg:w-[600px] lg:mr-16 lg:mb-14"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
