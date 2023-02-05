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
        .to(".section-sky__wave-wrapper-1", { x: "-200%" }, "waves")
        .to(".section-sky__wave-wrapper-2", { x: "-170%" }, "waves")
        .to(".section-sky__wave-wrapper-3", { x: "-130%" }, "waves")
        .to(".section-sky__wave-wrapper-4", { x: "-180%" }, "waves");
      // .to(
      //   ".section-sky__wave-2",
      //   { backgroundPosition: `${window.innerWidth + 300 * -4}px 0` },
      //   "waves"
      // )
      // .to(
      //   ".section-sky__wave-3",
      //   { backgroundPosition: `${window.innerWidth + 200 * 2}px 0` },
      //   "waves"
      // )
      // .to(
      //   ".section-sky__wave-4",
      //   { backgroundPosition: `${window.innerWidth + 100 * -2}px 0` },
      //   "waves"
      // );
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
        .from(".section-sky", { backgroundColor: "#87c6d8" })
        .to(".section-sky", { backgroundColor: "#74939b" }, ">")
        // .to(".section-sky", { backgroundColor: "##cf7d7c" }, ">")
        .to(".section-sky", { backgroundColor: "#f2b6b4" }, ">")
        .to(".section-sky", { backgroundColor: "#fe7b81" }, ">")
        .to(".section-sky", { backgroundColor: "#7b4567" }, ">");
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
