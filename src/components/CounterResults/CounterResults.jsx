import styles from "./CounterResults.module.css";

const CounterResults = ({ phones }) => {
  return (
    <div>
      <span className={styles.count}>{phones.length} Results</span>
    </div>
  );
};

export default CounterResults;
