import { gsap as g } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

g.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);
export const gsap = g;
