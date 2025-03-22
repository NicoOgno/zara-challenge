import React from "react";
import styles from "./PhonesList.module.css";
import PhoneCard from "../PhoneCard/PhoneCard";
const PhonesList = ({ phones, handlePhoneDetails }) => {
  return (
    <div className={styles.phonesContainer}>
      {phones.map((phone) => (
        <PhoneCard
          key={phone.id}
          phone={phone}
          handlePhoneDetails={handlePhoneDetails}
        />
      ))}
    </div>
  );
};

export default PhonesList;
