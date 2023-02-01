import { RefObject, useLayoutEffect, useRef } from "react";
import { gsap } from "@/gsap";

type Props = {
  appRef: RefObject<HTMLDivElement>;
};

export const useSkyAnimations = ({ appRef }: Props) => {
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
        .to(
          ".section-sky__wave-1",
          { backgroundPosition: `${window.innerWidth + 400 * 4}px 0` },
          "waves"
        )
        .to(
          ".section-sky__wave-2",
          { backgroundPosition: `${window.innerWidth + 300 * -4}px 0` },
          "waves"
        )
        .to(
          ".section-sky__wave-3",
          { backgroundPosition: `${window.innerWidth + 200 * 2}px 0` },
          "waves"
        )
        .to(
          ".section-sky__wave-4",
          { backgroundPosition: `${window.innerWidth + 100 * -2}px 0` },
          "waves"
        );
    }, appRef);
    return () => ctx.revert();
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
    return () => ctx.revert();
  }, [appRef]);

  useLayoutEffect(() => {
    if (appRef?.current) {
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
      return () => ctx.revert();
    }
  }, [appRef]);
};
