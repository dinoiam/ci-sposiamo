import React from "react";
import { ReactComponent as EatSvg } from "@svg/eat.svg";
import styles from "./style.module.scss";

export const Eat = (): JSX.Element => {
  return (
    <h2 data-animation-id="section-sand__eat" className={styles.eat}>
      <EatSvg />
      mangiare
    </h2>
  );
};
