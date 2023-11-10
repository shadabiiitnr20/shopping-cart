import "./App.css";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index path="/" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
