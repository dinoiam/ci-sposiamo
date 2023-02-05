import React from "react";
import { ReactComponent as ExternalLink } from "@svg/external-link.svg";
import { ReactComponent as Ring } from "@svg/ring.svg";
import { ReactComponent as Eat } from "@svg/eat.svg";
import { ReactComponent as Man } from "@svg/man.svg";
import { ReactComponent as Woman } from "@svg/woman.svg";
import { ReactComponent as Michele } from "@svg/michele.svg";
import { ReactComponent as Gabriella } from "@svg/gabriella.svg";
import { ReactComponent as E } from "@svg/e.svg";
import "./style.scss";

export const Sand = (): JSX.Element => {
  return (
    <section className="section-sand" id="section-sand">
      <div className="section-sand__info">
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
        <h2 className="section-sand__yes">
          per dire "si",
          <Ring />
        </h2>
        <h2 className="section-sand__eat">
          <Eat />
          mangiare
        </h2>
        <h2 className="section-sand__dance">
          <Man />
          e ballare insieme!
          <Woman />
        </h2>
      </div>
      <div className="section-sand__names">
        <Michele />
        <E />
        <Gabriella />
      </div>
      <p className="section-sand__ps">
        PS: Non dimenticatevi di confermarci la vostra presenza entro il
        01.08.2023.
      </p>
    </section>
  );
};
