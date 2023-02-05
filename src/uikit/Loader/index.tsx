import React from "react";
import styles from "./style.module.scss";

export const Loader = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  );
};
