import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import productsService from "../../service/productsService";
import SearchBar from "../../components/SearchBar/SearchBar";
import PhonesList from "../../components/PhonesList/PhonesList";

const Home = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    productsService.getAll().then((data) => setPhones(data));
  }, []);

  const handleSearch = async (query) => {
    const results = await productsService.queryPhones(query);
    setPhones(results);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <PhonesList phones={phones} />
    </div>
  );
};

export default Home;
