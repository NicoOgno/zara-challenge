import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const getAll = () => {
  return axios
    .get(BASE_URL, {
      headers: { "x-api-key": API_KEY }
    })
    .then((response) => {
      //Filtrar data por ID
      const uniqueIDData = response.data.reduce((acc, item) => {
        if (!acc.some((existingItem) => existingItem.id === item.id)) {
          acc.push(item);
        }
        return acc;
      }, []);

      return uniqueIDData.slice(0, 20);
    })
    .catch((error) => {
      console.error("Error fetching phones: ", error);
      return [];
    })
}

export default {
  getAll
}