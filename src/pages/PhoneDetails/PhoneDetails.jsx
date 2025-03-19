import { useLocation } from "react-router-dom";

const PhoneDetails = () => {
  const location = useLocation();
  const phone = location.state?.phoneDetails;

  if (!phone) return <div>Loading phone details...</div>;
  console.log(phone);

  return (
    <div>
      <div>{`Phone detail: ${phone.brand}`}</div>
      <div>{`Phone ID: ${phone.id}`}</div>
    </div>
  );
};

export default PhoneDetails;
