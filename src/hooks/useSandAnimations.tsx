import { type RefObject, useLayoutEffect, useRef } from "react";
import { gsap } from "@/gsap";

export const useSandAnimations = (appRef: RefObject<HTMLDivElement>): void => {
  const sandTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      sandTimeline.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-sky__intro-label",
            endTrigger: ".section-cloud",
            start: "top 30%",
            end: "top center",
            scrub: 3,
          },
        })
        .fromTo(
          ".section-sand__where",
          { y: "-100%", opacity: 0 },
          { y: 0, opacity: "1" }
        )
        .fromTo(
          ".section-sand__yes",
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
          ".section-sand__eat",
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
          ".section-sand__dance",
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
        .to(
          ".michele-path",
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "sign"
        )
        .to(
          ".michele-circle",
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "<20%"
        )
        .to(
          ".gabriella-path",
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "sign"
        )
        .to(
          ".gabriella-circle",
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "<50%"
        )
        .to(
          ".ampersand-path",
          {
            "stroke-dashoffset": 0,
            ease: "none",
          },
          "sign"
        )
        .to(
          ".section-sand__ps",
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
