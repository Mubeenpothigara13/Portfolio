import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, viewportOnce } from "../motion";
import SectionLabel from "./ui/SectionLabel";
import SplitReveal from "./ui/SplitReveal";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    step: "01",
    title: "Foundations",
    desc: "HTML, CSS and JavaScript — static pages, layouts and the fundamentals of the web.",
  },
  {
    step: "02",
    title: "Programming logic",
    desc: "Learned C to build a solid grip on logic, problem-solving and how computers think.",
  },
  {
    step: "03",
    title: "Modern frontend",
    desc: "React, Tailwind and Bootstrap — component architecture and responsive, real interfaces.",
  },
  {
    step: "04",
    title: "Full-stack & mobile",
    desc: "Node.js on the server and React Native on phones. Shipped Sonio and SP Billing.",
  },
  {
    step: "05",
    title: "Data science & AI",
    desc: "Python, Pandas and ML for forecasting, plus LLM APIs. Built BizPilot AI on top of it.",
  },
  {
    step: "Now",
    title: "3D, motion & AI-first dev",
    desc: "Three.js and GSAP storefronts with AI-generated 3D, built day to day with Claude Code.",
  },
];

function Journey() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: lineRef.current.parentElement,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      gsap.utils.toArray(".journey-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          { backgroundColor: "#0a0a0b", scale: 0.6 },
          {
            backgroundColor: "#c9f158",
            scale: 1,
            scrollTrigger: { trigger: dot, start: "top 60%", toggleActions: "play none none reverse" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="relative bg-ink px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <SectionLabel no="04">Journey</SectionLabel>
            <SplitReveal
              lines={["How I got", { text: "here", className: "font-serif italic font-normal" }]}
              className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tightest text-bone md:text-7xl"
            />
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-6 max-w-sm text-mute"
            >
              Every skill on this page came from building something real. This is the path so far.
            </motion.p>
          </div>
        </div>

        <div className="relative md:col-span-7">
          <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-white/10" />
          <div
            ref={lineRef}
            className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px origin-top bg-accent"
          />

          <div className="flex flex-col gap-16">
            {milestones.map((m) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative pl-12"
              >
                <span className="journey-dot absolute left-0 top-2 h-[15px] w-[15px] rounded-full border border-accent" />
                <span className="font-serif text-lg italic text-accent">{m.step}</span>
                <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight text-bone md:text-4xl">
                  {m.title}
                </h3>
                <p className="mt-3 max-w-lg text-mute">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
