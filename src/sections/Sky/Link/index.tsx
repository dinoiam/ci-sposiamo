import React from "react";
import { ReactComponent as ArrowDown } from "@svg/arrow-down.svg";
import styles from "./style.module.scss";

export const Link = (): JSX.Element => {
  return (
    <a className={styles.link} href="#section-sand">
      <ArrowDown />
    </a>
  );
};
