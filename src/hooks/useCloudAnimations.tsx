import { type RefObject, useLayoutEffect, useRef } from "react";
import { gsap } from "@/gsap";

export const useCloudAnimations = (appRef: RefObject<HTMLDivElement>): void => {
  const cloudTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cloudTimeline.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#text1849",
            endTrigger: "[data-animation-id='section-cloud__gift-info']",
            start: "bottom bottom",
            end: "bottom bottom",
            scrub: 2,
          },
        })
        .add("start")
        .fromTo(
          ".plane-path",
          {
            "stroke-dasharray": 1257,
            "stroke-dashoffset": 1257,
            ease: "none",
          },
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "start"
        )
        .to(
          "#plane",
          {
            motionPath: {
              path: ".plane-path",
              align: ".plane-path",
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
            },
            ease: "none",
          },
          "start"
        );
    }, appRef);
    return () => {
      ctx.revert();
    };
  }, [appRef]);
};
