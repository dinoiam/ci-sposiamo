import { type RefObject, useLayoutEffect, useRef } from "react";
import { gsap } from "@/gsap";

export const useSkyAnimations = (appRef: RefObject<HTMLDivElement>): void => {
  const wavesTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);
  const backgroundTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(
    null
  );
  const starsTimeline = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  useLayoutEffect(() => {
    gsap.to(appRef.current?.querySelector(".section-sky__sun") ?? null, {
      x: window.innerWidth,
      y: window.innerHeight,
      scrollTrigger: {
        trigger: appRef.current?.querySelector(".section-sky"),
        endTrigger: appRef.current?.querySelector(".section-sky__intro-label"),
        start: "top top",
        end: "bottom top",
        scrub: 3,
      },
    });
  }, [appRef]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      wavesTimeline.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: appRef.current,
            endTrigger: ".section-sky__wave-1",
            start: "top top",
            end: "top top",
            scrub: 3,
          },
        })
        .add("waves")
        .fromTo(
          ".section-sky__wave-wrapper-1",
          { x: 0 },
          { x: "-200%" },
          "waves"
        )
        .fromTo(
          ".section-sky__wave-wrapper-2",
          { x: "-100%" },
          { x: "-170%" },
          "waves"
        )
        .fromTo(
          ".section-sky__wave-wrapper-3",
          { x: "-30%" },
          { x: "-130%" },
          "waves"
        )
        .fromTo(
          ".section-sky__wave-wrapper-4",
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
            endTrigger: ".section-sky__intro-label",
            start: "top top",
            end: "bottom top",
            scrub: 3,
          },
        })
        .from(".section-sky__background", { backgroundColor: "#87c6d8" })
        .to(".section-sky__background", { backgroundColor: "#74939b" }, ">")
        // .to(".section-sky__background", { backgroundColor: "##cf7d7c" }, ">")
        .to(".section-sky__background", { backgroundColor: "#f2b6b4" }, ">")
        .to(".section-sky__background", { backgroundColor: "#fe7b81" }, ">")
        .to(".section-sky__background", { backgroundColor: "#7b4567" }, ">");
    }, appRef);
    return () => {
      ctx.revert();
    };
  }, [appRef]);

  useLayoutEffect(() => {
    if (appRef?.current != null) {
      const stars = document.querySelectorAll(".section-sky__star");
      const ctx = gsap.context(() => {
        starsTimeline.current = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-sky__intro-label",
            start: "top top",
            endTrigger: ".section-sand__info",
            end: "bottom top",
            scrub: 3,
            onToggle: ({ isActive }) => {
              stars.forEach((star) => {
                isActive
                  ? star.classList.add("visible")
                  : star.classList.remove("visible");
              });
            },
          },
        });
      }, appRef);
      return () => {
        ctx.revert();
      };
    }
  }, [appRef]);
};
