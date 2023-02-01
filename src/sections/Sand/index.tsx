import React, { useLayoutEffect, useRef, RefObject } from "react";
import { ReactComponent as ExternalLink } from "@svg/external-link.svg";
import { ReactComponent as Ring } from "@svg/ring.svg";
import { ReactComponent as Eat } from "@svg/eat.svg";
import { ReactComponent as Man } from "@svg/man.svg";
import { ReactComponent as Woman } from "@svg/woman.svg";
import { ReactComponent as Michele } from "@svg/michele.svg";
import { ReactComponent as Gabriella } from "@svg/gabriella.svg";
import { ReactComponent as E } from "@svg/e.svg";
import { gsap } from "@/gsap";
import "./style.scss";

type Props = {
  appRef: RefObject<HTMLDivElement>;
};

export const Sand = ({ appRef }: Props) => {
  // const section = useRef(null);
  // const sandTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  // useLayoutEffect(() => {
  //   if (appRef?.current) {
  //     const ctx = gsap.context(() => {
  //       sandTimeline.current = gsap
  //         .timeline({
  //           scrollTrigger: {
  //             trigger: ".section-sky__intro-label",
  //             endTrigger: ".section-cloud",
  //             start: "top 30%",
  //             end: "top center",
  //             scrub: 3,
  //           },
  //         })
  //         .to(".section-sand__where", { y: 0, opacity: "1" })
  //         .to(".section-sand__yes", {
  //           x: 0,
  //           opacity: "1",
  //         })
  //         .to(".section-sand__eat", {
  //           x: 0,
  //           opacity: "1",
  //         })
  //         .to(".section-sand__dance", {
  //           scale: 1,
  //           opacity: "1",
  //         })
  //         .add("sign", ">")
  //         .to(
  //           ".michele-path",
  //           {
  //             "stroke-dashoffset": 0,
  //             ease: "none",
  //           },
  //           "sign"
  //         )
  //         .to(
  //           ".michele-circle",
  //           {
  //             "stroke-dashoffset": 0,
  //             ease: "none",
  //           },
  //           "<20%"
  //         )
  //         .to(
  //           ".gabriella-path",
  //           {
  //             "stroke-dashoffset": 0,
  //             ease: "none",
  //           },
  //           "sign"
  //         )
  //         .to(
  //           ".gabriella-circle",
  //           {
  //             "stroke-dashoffset": 0,
  //             ease: "none",
  //           },
  //           "<50%"
  //         )
  //         .to(
  //           ".ampersand-path",
  //           {
  //             "stroke-dashoffset": 0,
  //             ease: "none",
  //           },
  //           "sign"
  //         )
  //         .to(
  //           ".section-sand__ps",
  //           {
  //             opacity: 1,
  //           },
  //           "sign"
  //         );
  //     }, appRef);
  //     return () => ctx.revert();
  //   }
  // }, [appRef]);

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
