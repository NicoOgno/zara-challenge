import React from "react";
import styles from "./PhonesList.module.css";

const PhonesList = ({ phones, handlePhoneDetails }) => {
  return (
    <div className={styles.phonesContainer}>
      {phones.map((phone) => {
        return (
          <div
            key={phone.id}
            className={styles.phoneCard}
            onClick={() => handlePhoneDetails(phone.id)}
          >
            <div className={styles.imageWrapper}>
              <img
                className={styles.phoneImage}
                src={phone.imageUrl}
                alt={phone.name}
              />
            </div>
            <p className={styles.phoneBrand}>{phone.brand}</p>
            <p className={styles.phoneName}>{phone.name}</p>
            <p className={styles.phonePrice}>{`${phone.basePrice} EUR`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PhonesList;
