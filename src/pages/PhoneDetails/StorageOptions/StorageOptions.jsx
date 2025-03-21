import React from "react";
import styles from "./StorageOptions.module.css";

const StorageOptions = ({
  storageOptions,
  selectedStorage,
  setSelectedStorage,
}) => {
  return (
    <div className={styles.storageContainer}>
      <p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>
      <div className={styles.storageOptions}>
        {storageOptions.map((option) => (
          <button
            key={option.capacity}
            className={
              selectedStorage === option
                ? `${styles.selected} ${styles.btnStorage}`
                : styles.btnStorage
            }
            onClick={() => setSelectedStorage(option)}
          >
            {option.capacity}
          </button>
        ))}
      </div>
    </div>
  );
};
export default StorageOptions;
