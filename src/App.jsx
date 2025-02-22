import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ProductDetail from "./pages/ProductDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { ProductProvider } from "./context/ProductContext";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import About from "./pages/About";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProductProvider>
      <Router>
      <div className="relative">
        {/* Hamburger Menu Button */}
        <button className={`absolute top-5 z-50 ${isOpen ? "left-52" : "left-5"}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} color="white" /> : <Menu size={30} />}
        </button>
      </div>
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform z-30 ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        <ul className="p-5 space-y-5">
          <li><Link to="/" className="text-lg hover:text-blue-400">Home</Link></li>
          <li><Link to="/listing" className="text-lg hover:text-blue-400">Listing</Link></li>
          <li><Link to="/about-us" className="text-lg hover:text-blue-400">About Us</Link></li>
        </ul>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing/:id" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </ProductProvider>
  );
}
export default App;