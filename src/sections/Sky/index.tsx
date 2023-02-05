import React, { useRef, useLayoutEffect, RefObject } from "react";
import { ReactComponent as ArrowDown } from "@svg/arrow-down.svg";
import { gsap } from "@/gsap";

import "./style.scss";

type Props = {
  appRef: RefObject<HTMLDivElement>;
};

export const Sky = ({ appRef }: Props) => {
  // const section = useRef(null);

  // const wavesTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);
  // const backgroundTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(
  //   null
  // );
  // const starsTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  // useLayoutEffect(() => {
  //   appRef.current &&
  //     gsap.to(appRef.current.querySelector(".section-sky__sun"), {
  //       x: window.innerWidth,
  //       y: window.innerHeight,
  //       scrollTrigger: {
  //         trigger: appRef.current.querySelector(".section-sky"),
  //         endTrigger: appRef.current.querySelector(".section-sky__intro-label"),
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 3,
  //       },
  //     });
  // }, [appRef]);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     wavesTimeline.current = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: section.current,
  //           endTrigger: ".section-sky__wave-1",
  //           start: "top top",
  //           end: "top top",
  //           scrub: 3,
  //         },
  //       })
  //       .add("waves")
  //       .to(
  //         ".section-sky__wave-1",
  //         { backgroundPosition: `${window.innerWidth + 400 * 4}px 0` },
  //         "waves"
  //       )
  //       .to(
  //         ".section-sky__wave-2",
  //         { backgroundPosition: `${window.innerWidth + 300 * -4}px 0` },
  //         "waves"
  //       )
  //       .to(
  //         ".section-sky__wave-3",
  //         { backgroundPosition: `${window.innerWidth + 200 * 2}px 0` },
  //         "waves"
  //       )
  //       .to(
  //         ".section-sky__wave-4",
  //         { backgroundPosition: `${window.innerWidth + 100 * -2}px 0` },
  //         "waves"
  //       );
  //   }, section);
  //   return () => ctx.revert();
  // }, []);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     backgroundTimeline.current = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: section.current,
  //           endTrigger: ".section-sky__intro-label",
  //           start: "top top",
  //           end: "bottom top",
  //           scrub: 3,
  //         },
  //       })
  //       .from(section.current, { backgroundColor: "#87c6d8" })
  //       .to(section.current, { backgroundColor: "#74939b" }, ">")
  //       // .to(section.current, { backgroundColor: "##cf7d7c" }, ">")
  //       .to(section.current, { backgroundColor: "#f2b6b4" }, ">")
  //       .to(section.current, { backgroundColor: "#fe7b81" }, ">")
  //       .to(section.current, { backgroundColor: "#7b4567" }, ">");
  //   }, section);
  //   return () => ctx.revert();
  // }, []);

  // useLayoutEffect(() => {
  //   if (appRef?.current) {
  //     const stars = document.querySelectorAll(".section-sky__star");
  //     const ctx = gsap.context(() => {
  //       starsTimeline.current = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: ".section-sky__intro-label",
  //           start: "top top",
  //           endTrigger: ".section-sand__info",
  //           end: "bottom top",
  //           scrub: 3,
  //           onToggle: ({ isActive }) => {
  //             stars.forEach((star) => {
  //               isActive
  //                 ? star.classList.add("visible")
  //                 : star.classList.remove("visible");
  //             });
  //           },
  //         },
  //       });
  //     }, appRef);
  //     return () => ctx.revert();
  //   }
  // }, [appRef]);

  return (
    <section className="section-sky">
      <div className="section-sky__sun"></div>
      <div
        className="section-sky__star section-sky__star-1"
        style={{ "--star": 1 } as React.CSSProperties}
      ></div>
      <div
        className="section-sky__star section-sky__star-2"
        style={{ "--star": 2 } as React.CSSProperties}
      ></div>
      <div
        className="section-sky__star section-sky__star-3"
        style={{ "--star": 3 } as React.CSSProperties}
      ></div>
      <div
        className="section-sky__star section-sky__star-4"
        style={{ "--star": 4 } as React.CSSProperties}
      ></div>
      <div className="section-sky__cloud"></div>

      <div className="section-sky__intro">
        <h1 className="section-sky__intro-label">
          Ci sposiamo in riva al mare!
        </h1>
      </div>
      <div
        className="section-sky__wave section-sky__wave-1"
        style={{ "--wave": 1 } as React.CSSProperties}
      ></div>
      <div
        className="section-sky__wave section-sky__wave-2"
        style={{ "--wave": 2 } as React.CSSProperties}
      ></div>
      <div
        className="section-sky__wave section-sky__wave-3"
        style={{ "--wave": 3 } as React.CSSProperties}
      ></div>
      <div
        className="section-sky__wave section-sky__wave-4"
        style={{ "--wave": 4 } as React.CSSProperties}
      ></div>
      <a className="section-sky__rapid-link" href="#section-sand">
        <ArrowDown />
      </a>
    </section>
  );
};
