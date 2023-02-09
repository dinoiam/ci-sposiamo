import React from "react";
import { Stars } from "./Stars";
import { Waves } from "./Waves";
import { Sun } from "./Sun";
import { Intro } from "./Intro";
import { Link } from "./Link";
import { Background } from "./Background";
import { Cloud } from "./Cloud";
import styles from "./style.module.scss";

export const Sky = (): JSX.Element => {
  return (
    <section data-animation-id="section-sky" className={styles.sky}>
      <Background />
      <Sun />
      <Stars />
      <Cloud />
      <Intro />
      <Waves />
      <Link />
    </section>
  );
};
