import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import styles from "./PhoneDetails.module.css";
import StorageOptions from "./StorageOptions/StorageOptions";
import ColorOptions from "./ColorOptions/ColorOptions";
import AddToCartButton from "./AddToCartButton/AddToCartButton";

const PhoneDetail = () => {
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const location = useLocation();
  const phone = location.state?.phoneDetails;

  const priceContent = !selectedStorage ? (
    <p className={styles.price}>From {phone.basePrice} EUR</p>
  ) : (
    <p className={styles.price}>{selectedStorage.price} EUR</p>
  );

  if (!phone) return <div>Loading phone details...</div>;
  return (
    <div className={styles.phoneDetailsContainer}>
      <button className={styles.backButton}>&lt; &nbsp; BACK</button>
      <div className={styles.detailsContainer}>
        <img
          className={styles.phoneImage}
          src={
            selectedColor
              ? selectedColor.imageUrl
              : phone.colorOptions[0].imageUrl
          }
          alt={phone.name}
        />
        <div className={styles.infoContainer}>
          <p className={styles.title}>{phone.name}</p>
          {priceContent}

          <StorageOptions
            storageOptions={phone.storageOptions}
            selectedStorage={selectedStorage}
            setSelectedStorage={setSelectedStorage}
          />

          <ColorOptions
            colorOptions={phone.colorOptions}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />

          <AddToCartButton disabled={!selectedStorage || !selectedColor} />
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
