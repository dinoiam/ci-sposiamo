import React from "react";
import styles from "./style.module.scss";

export const Gift = (): JSX.Element => {
  return (
    <div data-animation-id="section-cloud__gift-info" className={styles.info}>
      <div className={styles.list}>Lista nozze: Ometto Viaggiatore</div>
      <p className={styles.iban}>IBAN: IT4323452352352523</p>
    </div>
  );
};
