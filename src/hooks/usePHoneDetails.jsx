import { useNavigate } from "react-router-dom";
import productsService from "../service/productsService";

const usePhoneDetails = () => {
  const navigate = useNavigate();

  const handlePhoneDetails = async (phoneID) => {
    try {
      const phoneDetails = await productsService.getPhone(phoneID);
      navigate(`/phone-details/${phoneDetails.id}`, {
        state: { phoneDetails },
      });
    } catch (error) {
      console.error("Error handling phone details:", error);
    }
  };

  return { handlePhoneDetails };
};

export default usePhoneDetails;
