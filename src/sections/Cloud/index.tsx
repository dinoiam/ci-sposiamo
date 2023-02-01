import React, { useLayoutEffect, RefObject, useRef } from "react";
import { ReactComponent as Plane } from "@svg/plane.svg";
import divider from "@images/divider.png";
import { gsap } from "@/gsap";
import "./style.scss";

type Props = {
  appRef: RefObject<HTMLDivElement>;
};

export const Cloud = ({ appRef }: Props) => {
  // const cloudTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  // useLayoutEffect(() => {
  //   if (appRef?.current) {
  //     const ctx = gsap.context(() => {
  //       cloudTimeline.current = gsap
  //         .timeline({
  //           scrollTrigger: {
  //             trigger: "#text1849",
  //             endTrigger: ".section-cloud__gift-info",
  //             start: "bottom bottom",
  //             end: "bottom bottom",
  //             scrub: 2,
  //           },
  //         })
  //         .add("start")
  //         .to(
  //           ".path",
  //           {
  //             "stroke-dashoffset": 0,
  //             ease: "none",
  //           },
  //           "start"
  //         )
  //         .to(
  //           "#plane",
  //           {
  //             motionPath: {
  //               path: ".path",
  //               align: ".path",
  //               autoRotate: true,
  //               alignOrigin: [0.5, 0.5],
  //             },
  //             ease: "none",
  //           },
  //           "start"
  //         );
  //     }, appRef);
  //     return () => ctx.revert();
  //   }
  // }, [appRef]);

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
