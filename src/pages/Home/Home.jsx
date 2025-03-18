import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL, {
        headers: { "x-api-key": API_KEY },
      })
      .then((response) => {
        //Filtrar data por ID
        const uniqueIDData = response.data.reduce((acc, item) => {
          if (!acc.some((existingItem) => existingItem.id === item.id)) {
            acc.push(item);
          }
          return acc;
        }, []);

        setPhones(uniqueIDData.slice(0, 20));
      })
      .catch((error) => {
        console.error("Error fetching phones: ", error);
        return [];
      });
  }, []);
  return (
    <div>
      <div>
        {phones.map((phone) => (
          <div key={phone.id}>
            <img src={phone.imageUrl} alt={phone.name} />
            <p>{phone.brand}</p>
            <p>{phone.name}</p>
            <p>{`${phone.basePrice} EUR`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
