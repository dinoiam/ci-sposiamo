import React from "react";
import { ReactComponent as EatSvg } from "@svg/eat.svg";
import "./style.scss";

export const Eat = (): JSX.Element => {
  return (
    <h2 className="section-sand__eat">
      <EatSvg />
      mangiare
    </h2>
  );
};
