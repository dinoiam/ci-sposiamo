import React from "react";
import { Wave } from "./Wave";

export const Waves = (): JSX.Element => {
  return (
    <div>
      <Wave id={1} />
      <Wave id={2} />
      <Wave id={3} />
      <Wave id={4} />
    </div>
  );
};
