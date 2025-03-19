import styles from "./CounterResults.module.css";

const CounterResults = ({ phones }) => {
  return (
    <div className={styles.countResults}>
      <span>{phones.length} Results</span>
    </div>
  );
};

export default CounterResults;
