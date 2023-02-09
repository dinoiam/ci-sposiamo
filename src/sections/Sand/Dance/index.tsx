import React from "react";
import { ReactComponent as Man } from "@svg/man.svg";
import { ReactComponent as Woman } from "@svg/woman.svg";
import styles from "./style.module.scss";

export const Dance = (): JSX.Element => {
  return (
    <h2 data-animation-id="section-sand__dance" className={styles.dance}>
      <Man />
      e ballare insieme!
      <Woman />
    </h2>
  );
};
