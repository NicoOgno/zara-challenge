import React from "react";
import styles from "./Specifications.module.css";

const Specifications = ({ phone }) => {
  return (
    <div className={styles.specsContainer}>
      <section className={styles.specSection}>
        <p className={styles.specTitle}>SPECIFICATIONS</p>
        <div className={styles.tableContainer}>
          <table className={styles.specTable}>
            <tbody>
              {[
                { label: "BRAND", value: phone.brand },
                { label: "NAME", value: phone.name },
                { label: "DESCRIPTION", value: phone.description },
                { label: "SCREEN", value: phone.specs?.screen },
                { label: "RESOLUTION", value: phone.specs?.resolution },
                { label: "PROCESSOR", value: phone.specs?.processor },
                { label: "MAIN CAMERA", value: phone.specs?.mainCamera },
                { label: "SELFIE CAMERA", value: phone.specs?.selfieCamera },
                { label: "BATTERY", value: phone.specs?.battery },
                { label: "OS", value: phone.specs?.os },
                {
                  label: "SCREEN REFRESH RATE",
                  value: phone.specs?.screenRefreshRate,
                },
              ].map((row, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.specLabel}>{row.label}</td>
                  <td className={styles.specValue}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Specifications;
