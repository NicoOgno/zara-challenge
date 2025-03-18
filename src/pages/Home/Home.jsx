import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import productsService from "../../service/productsService";
import PhonesList from "../../components/PhonesList/PhonesList";

const Home = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    productsService.getAll().then((data) => setPhones(data));
  }, []);
  return (
    <div>
      <PhonesList phones={phones} />
    </div>
  );
};

export default Home;
