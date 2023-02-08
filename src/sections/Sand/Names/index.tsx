import React from "react";
import { ReactComponent as Michele } from "@svg/michele.svg";
import { ReactComponent as Gabriella } from "@svg/gabriella.svg";
import { ReactComponent as E } from "@svg/e.svg";
import "./style.scss";

export const Names = (): JSX.Element => {
  return (
    <div className="section-sand__names">
      <Michele />
      <E />
      <Gabriella />
    </div>
  );
};
