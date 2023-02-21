import { type RefObject, useLayoutEffect, useRef } from "react";
import { gsap } from "@/gsap";

export const useSkyAnimations = (appRef: RefObject<HTMLDivElement>): void => {
  const wavesTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);
  const backgroundTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(
    null
  );

  useLayoutEffect(() => {
    gsap.to(
      appRef.current?.querySelector("[data-animation-id='section-sky__sun'") ??
        null,
      {
        x: window.innerWidth,
        y: window.innerHeight,
        scrollTrigger: {
          trigger: appRef.current?.querySelector(
            "[data-animation-id='section-sky']"
          ),
          endTrigger: appRef.current?.querySelector(
            "[data-animation-id='section-sky__intro-label'"
          ),
          start: "top top",
          end: "bottom top",
          scrub: 3,
        },
      }
    );
  }, [appRef]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      wavesTimeline.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: appRef.current,
            endTrigger: "[data-animation-id='section-sky__wave-wrapper-1'",
            start: "top top",
            end: "top top",
            scrub: 3,
          },
        })
        .add("waves")
        .fromTo(
          "[data-animation-id='section-sky__wave-wrapper-1']",
          { x: 0 },
          { x: "-200%" },
          "waves"
        )
        .fromTo(
          "[data-animation-id='section-sky__wave-wrapper-2']",
          { x: "-100%" },
          { x: "-170%" },
          "waves"
        )
        .fromTo(
          "[data-animation-id='section-sky__wave-wrapper-3']",
          { x: "-30%" },
          { x: "-130%" },
          "waves"
        )
        .fromTo(
          "[data-animation-id='section-sky__wave-wrapper-4']",
          { x: "-140%" },
          { x: "-180%" },
          "waves"
        );
    }, appRef);
    return () => {
      ctx.revert();
    };
  }, [appRef]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      backgroundTimeline.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: appRef.current,
            endTrigger: "[data-animation-id='section-sky__intro-label'",
            start: "top top",
            end: "bottom top",
            scrub: 3,
          },
        })
        .add("susset")
        .fromTo(
          "[data-animation-id='section-sky__sky']",
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
          "susset+=40%"
        )
        .fromTo(
          "[data-animation-id='section-sky__sunset']",
          {
            opacity: 0,
            background:
              "linear-gradient(180deg, rgba(173,214,224,1) 25%, rgba(254,123,129,1) 71%",
          },
          {
            opacity: 1,
          },
          "susset+=30%"
        )
        .add("stars")
        .to(
          "[data-animation-id='section-sky__sunset']",
          {
            opacity: 0,
          },
          "stars"
        )
        .fromTo(
          "[data-animation-id='section-sky__night']",
          {
            opacity: 0,
            background:
              "linear-gradient(180deg, rgba(254,123,129,1) 14%, rgba(123,69,103,1) 54%, rgba(46,25,38,1) 86%)",
          },
          {
            opacity: 1,
          },
          "stars"
        )
        .fromTo(
          "[data-animation-id='section-stars-wrapper'",
          { opacity: 0 },
          { opacity: 1 },
          "stars"
        );
    }, appRef);
    return () => {
      ctx.revert();
    };
  }, [appRef]);
};
