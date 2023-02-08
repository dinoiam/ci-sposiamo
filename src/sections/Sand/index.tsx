import React from "react";
import "./style.scss";
import { Ps } from "./Ps";
import { Names } from "./Names";
import { Dance } from "./Dance";
import { Yes } from "./Yes";
import { Where } from "./Where";
import { Eat } from "./Eat";

export const Sand = (): JSX.Element => {
  return (
    <section className="section-sand" id="section-sand">
      <div className="section-sand__info">
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
