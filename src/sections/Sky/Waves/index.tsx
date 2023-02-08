import React from "react";
import { Wave } from "./Wave";
import "./style.scss";

export const Waves = (): JSX.Element => {
  return (
    <div className="waves">
      <Wave id={1} />
      <Wave id={2} />
      <Wave id={3} />
      <Wave id={4} />
    </div>
  );
};
