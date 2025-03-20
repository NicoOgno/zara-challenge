import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import productsService from "../../service/productsService";
import SearchBar from "../../components/SearchBar/SearchBar";
import PhonesList from "../../components/PhonesList/PhonesList";
import CounterResults from "../../components/CounterResults/CounterResults";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Home = () => {
  const [phones, setPhones] = useState([]);
  const { setInCartPage } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    productsService.getAll().then((data) => setPhones(data));
    setInCartPage(false);
  }, []);

  const handleSearch = async (query) => {
    const results = await productsService.queryPhones(query);
    setPhones(results);
  };

  const handlePhoneDetails = async (phoneID) => {
    try {
      const phoneDetails = await productsService.getPhone(phoneID);
      navigate(`/phone-details`, { state: { phoneDetails } });
    } catch (error) {
      console.error("Error handling phone details:", error);
    }
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <CounterResults phones={phones} />
      <PhonesList phones={phones} handlePhoneDetails={handlePhoneDetails} />
    </div>
  );
};

export default Home;
