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
      console.log(uniqueIDData);

      return uniqueIDData.slice(0, 20);
    })
    .catch((error) => {
      console.error("Error fetching phones: ", error);
      return [];
    })
}

const queryPhones = async (query = "") => {
  try {
    const allPhones = await getAll();

    const filteredPhones = allPhones.filter((phone) =>
      phone.name.toLowerCase().includes(query.toLowerCase()) ||
      phone.brand.toLowerCase().includes(query.toLowerCase())
    );

    return filteredPhones;
  } catch (error) {
    console.error("Error fetching phones:", error);
    return [];
  }
};

const getPhone = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: { "x-api-key": API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching phone details:", error);
    throw error;
  }
}

export default {
  getAll,
  queryPhones,
  getPhone
}