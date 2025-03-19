import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneDetails from "./pages/PhoneDetails/PhoneDetails";

function App() {
  return (
    <>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/phone-details" element={<PhoneDetails />} />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
