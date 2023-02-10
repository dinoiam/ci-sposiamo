import React from "react";
import styles from "./style.module.scss";

export const Background = (): JSX.Element => {
  return (
    <div className={styles.background}>
      <div data-animation-id="section-sky__sky" className={styles.sky} />
      {/* <div className={styles.sunset} /> */}
      <div data-animation-id="section-sky__sunset" className={styles.sunset} />
      <div data-animation-id="section-sky__night" className={styles.night} />
    </div>
  );
};
