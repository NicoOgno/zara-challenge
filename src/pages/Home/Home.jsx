import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import productsService from "../../service/productsService";
import SearchBar from "../../components/SearchBar/SearchBar";
import PhonesList from "../../components/PhonesList/PhonesList";
import CounterResults from "../../components/CounterResults/CounterResults";
import { useCart } from "../../context/CartContext";

const Home = () => {
  const [phones, setPhones] = useState([]);
  const { setInCartPage } = useCart();

  useEffect(() => {
    productsService.getAll().then((data) => setPhones(data));
    setInCartPage(false);
  }, []);

  const handleSearch = async (query) => {
    const results = await productsService.queryPhones(query);
    setPhones(results);
  };

  return (
    <section className={styles.homeContainer}>
      <SearchBar handleSearch={handleSearch} />
      <CounterResults phones={phones} />
      <PhonesList phones={phones} />
    </section>
  );
};

export default Home;
