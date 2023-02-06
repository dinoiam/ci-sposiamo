import React from "react";
import { ReactComponent as ArrowDown } from "@svg/arrow-down.svg";

import "./style.scss";
import { Wave } from "./Wave";

export const Sky = (): JSX.Element => {
  return (
    <section className="section-sky">
      <div className="section-sky__background" />
      <div className="section-sky__sun" />
      <div
        className="section-sky__star section-sky__star-1"
        style={{ "--star": 1 } as React.CSSProperties}
      />
      <div
        className="section-sky__star section-sky__star-2"
        style={{ "--star": 2 } as React.CSSProperties}
      />
      <div
        className="section-sky__star section-sky__star-3"
        style={{ "--star": 3 } as React.CSSProperties}
      />
      <div
        className="section-sky__star section-sky__star-4"
        style={{ "--star": 4 } as React.CSSProperties}
      />
      <div className="section-sky__cloud" />

      <div className="section-sky__intro">
        <h1 className="section-sky__intro-label">
          Ci sposiamo in riva al mare!
        </h1>
      </div>
      <Wave id={1} />
      <Wave id={2} />
      <Wave id={3} />
      <Wave id={4} />
      {/* <Wave classNames="section-sky__wave-2" />
      <Wave classNames="section-sky__wave-3" />
      <Wave classNames="section-sky__wave-4" /> */}
      {/* <div
        className="section-sky__wave section-sky__wave-1"
        style={{ "--wave": 1 } as React.CSSProperties}
      />
      <div
        className="section-sky__wave section-sky__wave-2"
        style={{ "--wave": 2 } as React.CSSProperties}
      />
      <div
        className="section-sky__wave section-sky__wave-3"
        style={{ "--wave": 3 } as React.CSSProperties}
      />
      <div
        className="section-sky__wave section-sky__wave-4"
        style={{ "--wave": 4 } as React.CSSProperties}
      /> */}
      <a className="section-sky__rapid-link" href="#section-sand">
        <ArrowDown />
      </a>
    </section>
  );
};
