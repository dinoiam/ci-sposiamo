import React from "react";
import { Stars } from "./Stars";
import { Waves } from "./Waves";
import { Sun } from "./Sun";
import { Intro } from "./Intro";
import "./style.scss";
import { Link } from "./Link";

export const Sky = (): JSX.Element => {
  return (
    <section className="section-sky">
      <div className="section-sky__background" />
      <Sun />
      <Stars />
      <div className="section-sky__cloud" />
      <Intro />
      <Waves />
      <Link />
    </section>
  );
};
