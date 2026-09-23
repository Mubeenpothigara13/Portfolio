import { lazy, Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "../motion";
import { scrollToSection } from "../lib/scroll";
import Marquee from "./ui/Marquee";
import { marqueeWords } from "../data/skills";

const HeroScene = lazy(() => import("./canvas/HeroScene"));

const char = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.2, ease: EASE } },
};

function SplitChars({ text, className = "" }) {
  return (
    <span className={`line-mask ${className}`} aria-label={text}>
      {text.split("").map((c, i) => (
        <motion.span key={i} variants={char} className="inline-block" aria-hidden>
          {c}
        </motion.span>
      ))}
    </span>
  );
}

function Hero({ ready }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const state = ready ? "show" : "hidden";

  return (
    <section ref={ref} id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <motion.div style={{ scale: sceneScale, opacity: fade }} className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroScene className="absolute inset-0" />
        </Suspense>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-ink/40 via-transparent to-ink" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-5 pb-8 pt-28 md:px-10 md:pt-32"
      >
        <motion.div
          initial="hidden"
          animate={state}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } } }}
          className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } } }}
            className="max-w-sm text-lg leading-snug text-bone/80 md:text-xl"
          >
            Full-stack &amp; AI developer building{" "}
            <span className="font-serif italic text-bone">intelligent software</span>, mobile apps
            and 3D web experiences.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } } }}
            className="flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </motion.div>
        </motion.div>

        <motion.div style={{ y: nameY }}>
          <motion.h1
            initial="hidden"
            animate={state}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
            className="select-none font-display font-semibold leading-[0.85] tracking-tightest text-bone"
          >
            <SplitChars text="Mubeen" className="text-[23vw] md:text-[15vw]" />
            <SplitChars
              text="Pothigara"
              className="text-right font-serif text-[19vw] font-normal italic tracking-tight md:text-[13vw]"
            />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.25em] text-mute"
          >
            <span>Gujarat, India</span>
            <span className="hidden sm:inline">Web · Mobile · AI · 3D</span>
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center gap-2 text-bone transition-colors hover:text-accent"
            >
              Scroll
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 -rotate-2 border-y border-white/10 bg-accent py-4 text-ink">
        <Marquee
          items={marqueeWords}
          renderItem={(w) => (
            <span className="flex items-center gap-8 px-4 font-display text-2xl font-semibold uppercase tracking-tight md:text-4xl">
              {w}
              <span className="text-xl">✦</span>
            </span>
          )}
        />
      </div>
      <div className="h-16 md:h-24" />
    </section>
  );
}

export default Hero;
