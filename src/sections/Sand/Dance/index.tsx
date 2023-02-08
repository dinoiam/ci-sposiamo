import React from "react";
import { ReactComponent as Man } from "@svg/man.svg";
import { ReactComponent as Woman } from "@svg/woman.svg";
import "./style.scss";

export const Dance = (): JSX.Element => {
  return (
    <h2 className="section-sand__dance">
      <Man />
      e ballare insieme!
      <Woman />
    </h2>
  );
};
