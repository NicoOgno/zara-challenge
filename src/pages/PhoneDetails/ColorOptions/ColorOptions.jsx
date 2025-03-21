import React from "react";
import styles from "./ColorOptions.module.css";

const ColorOptions = ({ colorOptions, selectedColor, setSelectedColor }) => {
  return (
    <div className={styles.colorContainer}>
      <p>COLOR. PICK YOUR FAVOURITE.</p>
      <div className={styles.colorOptions}>
        {colorOptions.map((color) => (
          <div key={color.name}>
            <button
              className={
                selectedColor === color
                  ? `${styles.selected} ${styles.btnColor}`
                  : styles.btnColor
              }
              style={{ backgroundColor: color.hexCode }}
              onClick={() => setSelectedColor(color)}
            />
          </div>
        ))}
      </div>
      <p className={styles.displaySelectedColor}>
        {selectedColor ? selectedColor.name : colorOptions[0].name}
      </p>
    </div>
  );
};

export default ColorOptions;
