import React from "react";
import { ReactComponent as Ring } from "@svg/ring.svg";
import "./style.scss";

export const Yes = (): JSX.Element => {
  return (
    <h2 className="section-sand__yes">
      per dire "si",
      <Ring />
    </h2>
  );
};
