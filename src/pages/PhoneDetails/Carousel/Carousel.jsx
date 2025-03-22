import styles from "./Carousel.module.css";
import PhoneCard from "../../../components/PhoneCard/PhoneCard";

const Carousel = ({ phone }) => {
  return (
    <div className={styles.carouselContainer}>
      <p className={styles.itemsTitle}>SIMILAR ITEMS</p>
      <section className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {phone.similarProducts.map((p) => (
            <div key={p.id} className={styles.carouselItem}>
              <PhoneCard phone={p} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Carousel;
