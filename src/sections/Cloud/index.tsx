import React from "react";
import { Divider } from "./Divider";
import { Gift } from "./Gift";
import { Plane } from "./Plane";
import styles from "./style.module.scss";

export const Cloud = (): JSX.Element => {
  return (
    <section data-animation-id="section-cloud" className={styles.cloud}>
      <Divider />
      <div className={styles.wrapper}>
        <Plane />
        <Gift />
      </div>
    </section>
  );
};
