import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../motion";
import SectionLabel from "./ui/SectionLabel";
import ScrubText from "./ui/ScrubText";
import StatCounter from "./StatCounter";

const stats = [
  { target: 9, suffix: "+", label: "Projects Built" },
  { target: 30, suffix: "+", label: "Technologies" },
  { target: 4, suffix: "", label: "Domains — Web, Mobile, AI, 3D" },
];

const services = [
  {
    title: "AI & Data Software",
    desc: "Business tools that analyse stock and sales, forecast demand and put LLMs to work.",
  },
  {
    title: "Web Applications",
    desc: "Fast, responsive React apps with a Node.js backend, from first wireframe to deploy.",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform iOS and Android apps built with React Native and Expo.",
  },
  {
    title: "3D & Motion",
    desc: "Three.js scenes, GSAP scroll stories and AI-assisted 3D storefronts.",
  },
];

function About() {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const monoRotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section id="about" className="relative bg-ink px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel no="01">About</SectionLabel>

        <ScrubText
          className="mt-10 max-w-6xl font-display text-3xl font-medium leading-[1.15] tracking-tight text-bone md:text-5xl lg:text-6xl"
          text="I'm Mubeen — a developer working where code, data and design meet. From AI software that reads a business's numbers to 3D storefronts and mobile apps, I build products that are smart underneath and beautiful on the surface."
        />

        <div className="mt-24 grid gap-16 md:mt-32 md:grid-cols-12 md:gap-10">
          <div ref={cardRef} className="md:col-span-5">
            <motion.div
              style={{ y: cardY }}
              className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1a1a1e] to-[#0d0d0f]"
            >
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#6fb8ff]/15 blur-3xl" />
              <motion.span
                style={{ rotate: monoRotate }}
                className="absolute inset-0 flex items-center justify-center font-serif text-[11rem] italic leading-none text-bone md:text-[13rem]"
              >
                Mp
              </motion.span>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 bg-black/30 px-6 py-4 text-xs uppercase tracking-[0.2em] text-mute backdrop-blur-md">
                <span>Mubeen Pothigara</span>
                <span className="text-accent">Dev · AI</span>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="max-w-xl space-y-5 text-lg leading-relaxed text-mute"
            >
              <motion.p variants={fadeUp}>
                I started with HTML and CSS, learned to think in logic with C, and
                grew into React, Node.js and React Native. Today most of my work
                mixes <span className="text-bone">full-stack development</span> with{" "}
                <span className="text-bone">data science and AI</span>.
              </motion.p>
              <motion.p variants={fadeUp}>
                I use AI tools like Claude Code every day. They help me ship faster,
                and I build them into products too: from forecasting stock in BizPilot
                to generating 3D assets for fashion storefronts.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-14 grid grid-cols-2 gap-10 border-t border-white/10 pt-10 sm:grid-cols-3"
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <StatCounter target={s.target} suffix={s.suffix} label={s.label} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-28 md:mt-40">
          <SectionLabel no="↳">What I do</SectionLabel>
          <div className="mt-10 border-t border-white/10">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="group relative grid grid-cols-12 items-center gap-4 overflow-hidden border-b border-white/10 py-8 md:py-10"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
                <span className="relative col-span-2 text-sm text-mute transition-colors duration-500 group-hover:text-ink md:col-span-1 md:pl-4">
                  0{i + 1}
                </span>
                <h3 className="relative col-span-10 font-display text-3xl font-semibold tracking-tight text-bone transition-all duration-500 group-hover:translate-x-3 group-hover:text-ink md:col-span-6 md:text-5xl">
                  {s.title}
                </h3>
                <p className="relative col-span-12 text-mute transition-colors duration-500 group-hover:text-ink/80 md:col-span-5 md:pr-4">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
