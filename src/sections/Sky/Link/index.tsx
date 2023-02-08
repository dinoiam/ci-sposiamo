import React from "react";
import { ReactComponent as ArrowDown } from "@svg/arrow-down.svg";
import "./style.scss";

export const Link = (): JSX.Element => {
  return (
    <a className="section-sky__rapid-link" href="#section-sand">
      <ArrowDown />
    </a>
  );
};
