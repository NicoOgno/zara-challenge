import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ handleSearch }) => {
  const [queryMobile, setQueryMobile] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQueryMobile(value);
    handleSearch(value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for a smartphone..."
        value={queryMobile}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
