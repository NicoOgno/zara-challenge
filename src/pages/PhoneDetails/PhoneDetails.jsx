import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./PhoneDetails.module.css";
import StorageOptions from "./StorageOptions/StorageOptions";
import ColorOptions from "./ColorOptions/ColorOptions";
import { Link } from "react-router-dom";
import { imgSizeCheck } from "../../utils/imgSizeCheck";

const PhoneDetails = () => {
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart, setInCartPage } = useCart();
  const location = useLocation();
  const phone = location.state?.phoneDetails;

  useEffect(() => {
    setInCartPage(false);
  }, []);

  if (!phone) return <div>Loading phone details...</div>;
  const disabled = !selectedStorage || !selectedColor;

  const handleAddToCart = () => {
    if (selectedStorage && selectedColor) {
      const productToAdd = {
        id: phone.id,
        name: phone.name,
        image: selectedColor.imageUrl,
        storage: selectedStorage.capacity,
        color: selectedColor.name,
        price: selectedStorage.price,
      };
      addToCart(productToAdd);
    }
  };

  return (
    <div className={styles.phoneDetailsContainer}>
      <Link className="navbarLink" to="/">
        <span>&lt; &nbsp; BACK</span>
      </Link>
      <div className={styles.detailsContainer}>
        <div className={styles.imageWrapper}>
          <img
            className={`${styles.phoneImage} ${imgSizeCheck(phone.id)}`}
            src={
              selectedColor
                ? selectedColor.imageUrl
                : phone.colorOptions[0].imageUrl
            }
            alt={phone.name}
          />
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.title}>{phone.name}</p>
          <p className={styles.price}>
            {selectedStorage
              ? `${selectedStorage.price} EUR`
              : `From ${phone.basePrice} EUR`}
          </p>

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

          <button
            className={`${styles.addToCart} ${disabled ? styles.disabled : ""}`}
            onClick={handleAddToCart}
            disabled={disabled}
          >
            AÑADIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
