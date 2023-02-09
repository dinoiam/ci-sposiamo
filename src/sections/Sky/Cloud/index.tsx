import React from "react";
import cloud from "@images/cloud.png";
import styles from "./style.module.scss";

export const Cloud = (): JSX.Element => {
  return (
    <div
      className={styles.cloud}
      style={{
        backgroundImage: `url(${cloud})`,
      }}
    />
  );
};
