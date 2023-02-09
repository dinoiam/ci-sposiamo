import React from "react";
import { Ps } from "./Ps";
import { Names } from "./Names";
import { Dance } from "./Dance";
import { Yes } from "./Yes";
import { Where } from "./Where";
import { Eat } from "./Eat";
import styles from "./style.module.scss";

export const Sand = (): JSX.Element => {
  return (
    <section className={styles.sand} id="section-sand">
      <div className={styles.info}>
        <Where />
        <Yes />
        <Eat />
        <Dance />
      </div>
      <Names />
      <Ps />
    </section>
  );
};
