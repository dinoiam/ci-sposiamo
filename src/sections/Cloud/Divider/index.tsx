import React from "react";
import divider from "@images/divider.png";
import styles from "./style.module.scss";

export const Divider = (): JSX.Element => {
  return (
    <div className={styles.divider}>
      <img src={divider} alt="divider" />
    </div>
  );
};
