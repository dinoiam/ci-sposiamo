import React from "react";
import { ReactComponent as Plane } from "@svg/plane.svg";
import divider from "@images/divider.png";
import "./style.scss";

export const Cloud = (): JSX.Element => {
  return (
    <section className="section-cloud">
      <div className="section-cloud__divider">
        <img src={divider} alt="divider" />
      </div>
      <div className="section-cloud__wrapper">
        <div className="section-cloud__plane-wrapper">
          <Plane />
        </div>
        <div className="section-cloud__gift-info">
          <div className="section-cloud__wedding-list">
            Lista nozze: Ometto Viaggiatore
          </div>
          <p className="section-cloud__iban">IBAN: IT4323452352352523</p>
        </div>
      </div>
    </section>
  );
};
