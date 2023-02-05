import { gsap as g } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

g.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // notice "resize" isn't in the list
});
export const gsap = g;
