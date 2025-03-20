import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneDetails from "./pages/PhoneDetails/PhoneDetails";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/phone-details" element={<PhoneDetails />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
