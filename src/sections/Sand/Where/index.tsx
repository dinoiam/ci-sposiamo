import React from "react";
import { ReactComponent as ExternalLink } from "@svg/external-link.svg";
import "./style.scss";

export const Where = (): JSX.Element => {
  return (
    <h2 className="section-sand__where">
      <p>Vi aspettiamo il</p>
      <p>01.09.2023</p>
      <p>alle 17.00</p>
      <p>a "La porta dei Leoni"</p>
      <a
        className="section-sand__maps-link"
        href="https://goo.gl/maps/GHrvzovsTstgykCZ7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          (Ss 159 delle Saline in 40, 490, 76016 Margherita di Savoia (BT))
          <ExternalLink />
        </p>
      </a>
    </h2>
  );
};
