import React from "react";
import styles from "./PhonesList.module.css";

const PhonesList = ({ phones }) => {
  return (
    <div className={styles.phonesContainer}>
      {phones.map((phone) => (
        <div key={phone.id} className={styles.phoneCard}>
          <div className={styles.imageContainer}>
            <img src={phone.imageUrl} alt={phone.name} />
          </div>
          <p className={styles.phoneBrand}>{phone.brand}</p>
          <p className={styles.phoneName}>{phone.name}</p>
          <p className={styles.phonePrice}>{`${phone.basePrice} EUR`}</p>
        </div>
      ))}
    </div>
  );
};

export default PhonesList;
