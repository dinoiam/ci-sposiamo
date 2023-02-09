import { type RefObject, useLayoutEffect, useRef } from "react";
import { gsap } from "@/gsap";

export const useSandAnimations = (appRef: RefObject<HTMLDivElement>): void => {
  const sandTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      sandTimeline.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "[data-animation-id='section-sky__intro-label'",
            endTrigger: "[data-animation-id='section-cloud']",
            start: "top 30%",
            end: "top center",
            scrub: 3,
          },
        })
        .fromTo(
          "[data-animation-id='section-sand__where']",
          { y: "-100%", opacity: 0 },
          { y: 0, opacity: "1" }
        )
        .fromTo(
          "[data-animation-id='section-sand__yes']",
          {
            x: "-50%",
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          }
        )
        .fromTo(
          "[data-animation-id='section-sand__eat']",
          {
            x: "50%",
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          }
        )
        .fromTo(
          "[data-animation-id='section-sand__dance']",
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
          }
        )
        .add("sign", ">")
        .fromTo(
          ".michele-path",
          {
            "stroke-dashoffset": 568,
            "stroke-dasharray": 568,
            ease: "none",
          },
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "sign"
        )
        .fromTo(
          ".michele-circle",
          {
            "stroke-dashoffset": 12,
            "stroke-dasharray": 12,
            ease: "none",
          },
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "<20%"
        )
        .fromTo(
          ".gabriella-path",
          {
            "stroke-dashoffset": 741,
            "stroke-dasharray": 741,
            ease: "none",
          },
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "sign"
        )
        .fromTo(
          ".gabriella-circle",
          {
            "stroke-dashoffset": 12,
            "stroke-dasharray": 12,
            ease: "none",
          },
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "<50%"
        )
        .fromTo(
          ".ampersand-path",
          {
            "stroke-dashoffset": 84,
            "stroke-dasharray": 84,
            ease: "none",
          },
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "sign"
        )
        .to(
          "[data-animation-id='section-sand__ps']",
          {
            opacity: 1,
          },
          "sign"
        );
    }, appRef);
    return () => {
      ctx.revert();
    };
  }, [appRef]);
};
