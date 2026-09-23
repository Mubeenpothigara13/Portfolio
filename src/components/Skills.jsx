import { motion } from "framer-motion";
import { skillGroups, marqueeWords } from "../data/skills";
import { EASE, fadeUp, stagger, viewportOnce } from "../motion";
import SectionLabel from "./ui/SectionLabel";
import SplitReveal from "./ui/SplitReveal";
import Marquee from "./ui/Marquee";

const chip = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#0e0e10] py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel no="03">Skills</SectionLabel>
        <SplitReveal
          lines={["A toolkit for", { text: "every layer", className: "font-serif italic font-normal" }]}
          className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tightest text-bone md:text-7xl"
        />

        <div className="mt-20 flex flex-col">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="grid gap-8 border-t border-white/10 py-12 md:grid-cols-12 md:gap-10 md:py-16"
            >
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="md:col-span-4"
              >
                <div className="md:sticky md:top-28">
                  <span className="font-serif text-xl italic text-accent">{g.no}</span>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-bone md:text-4xl">
                    {g.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-mute">{g.blurb}</p>
                </div>
              </motion.div>

              <motion.ul
                variants={stagger(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-8 lg:grid-cols-4"
              >
                {g.items.map(({ label, Icon }) => (
                  <motion.li
                    key={label}
                    variants={chip}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 transition-colors duration-300 hover:border-accent hover:bg-accent"
                  >
                    <Icon className="h-6 w-6 shrink-0 text-bone/80 transition-colors duration-300 group-hover:text-ink" />
                    <span className="text-sm text-bone/90 transition-colors duration-300 group-hover:text-ink">
                      {label}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-y border-white/10 py-6">
        <Marquee
          items={marqueeWords}
          renderItem={(w) => (
            <span className="px-6 font-display text-6xl font-bold uppercase tracking-tightest outline-text md:text-8xl">
              {w}
            </span>
          )}
        />
        <Marquee
          reverse
          items={[...marqueeWords].reverse()}
          renderItem={(w) => (
            <span className="flex items-center px-6 font-serif text-6xl italic text-bone/80 md:text-8xl">
              {w}
              <span className="ml-12 text-3xl text-accent">✦</span>
            </span>
          )}
        />
      </div>
    </section>
  );
}

export default Skills;
