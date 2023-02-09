import React from "react";
import styles from "./style.module.scss";

export const Intro = (): JSX.Element => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.label} data-animation-id="section-sky__intro-label">
        Ci sposiamo in riva al mare!
      </h1>
    </div>
  );
};
