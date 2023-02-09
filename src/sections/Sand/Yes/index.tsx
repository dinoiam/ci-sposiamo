import React from "react";
import { ReactComponent as Ring } from "@svg/ring.svg";
import styles from "./style.module.scss";

export const Yes = (): JSX.Element => {
  return (
    <h2 data-animation-id="section-sand__yes" className={styles.yes}>
      per dire "si",
      <Ring />
    </h2>
  );
};
