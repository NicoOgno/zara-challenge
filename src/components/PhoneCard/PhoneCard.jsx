import styles from "./PhoneCard.module.css";
import { imgSizeCheck } from "../../utils/imgSizeCheck";
import usePhoneDetails from "../../hooks/usePHoneDetails";

const PhoneCard = ({ phone }) => {
  const { handlePhoneDetails } = usePhoneDetails();

  return (
    <div
      className={styles.phoneCard}
      onClick={() => handlePhoneDetails(phone.id)}
    >
      <div className={styles.imageWrapper}>
        <img
          className={`${styles.phoneImage} ${imgSizeCheck(phone.id)}`}
          src={phone.imageUrl}
          alt={phone.name}
        />
      </div>
      <p className={styles.phoneBrand}>{phone.brand}</p>
      <p className={styles.phoneName}>{phone.name}</p>
      <p className={styles.phonePrice}>{`${phone.basePrice} EUR`}</p>
    </div>
  );
};

export default PhoneCard;
