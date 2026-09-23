import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featured, earlier } from "../data/projects";
import { fadeUp, viewportOnce } from "../motion";
import SectionLabel from "./ui/SectionLabel";
import SplitReveal from "./ui/SplitReveal";
import ProjectVisual from "./ProjectVisual";

gsap.registerPlugin(ScrollTrigger);

function ProjectPanel({ p }) {
  return (
    <article className="project-panel group flex w-full shrink-0 flex-col gap-6 lg:h-[62vh] lg:w-[64vw] lg:max-w-[1100px]">
      <a
        href={p.live ?? p.url}
        target="_blank"
        rel="noreferrer"
        data-cursor="View"
        className="relative block aspect-square w-full overflow-hidden rounded-[1.75rem] border border-white/10 sm:aspect-[16/10] lg:aspect-auto lg:flex-1"
      >
        <ProjectVisual project={p} />
        <span className="absolute left-5 top-5 hidden rounded-full sm:block border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-bone/80 backdrop-blur-md">
          {p.category}
        </span>
      </a>

      <div className="grid gap-4 md:grid-cols-12 md:items-start">
        <div className="flex items-baseline gap-4 md:col-span-5">
          <span className="font-serif text-2xl italic" style={{ color: p.color }}>
            {p.index}
          </span>
          <h3 className="font-display text-4xl font-semibold tracking-tight text-bone md:text-5xl">
            {p.title}
          </h3>
        </div>
        <div className="md:col-span-7">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-bone/60 sm:hidden">{p.category}</p>
          <p className="text-mute">{p.desc}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-bone/80">
                {t}
              </span>
            ))}
            <span className="ml-auto flex gap-4 text-sm">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-bone hover:text-accent">
                  Live <TbArrowUpRight />
                </a>
              )}
              <a href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-bone hover:text-accent">
                Code <TbArrowUpRight />
              </a>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function EarlierWork() {
  const [hovered, setHovered] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 25 });
  const sy = useSpring(y, { stiffness: 200, damping: 25 });

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <div className="mx-auto mt-28 max-w-[1600px] px-5 md:px-10 lg:mt-40">
      <SectionLabel no="↳">Earlier experiments</SectionLabel>
      <div
        className="relative mt-10 border-t border-white/10"
        onMouseMove={move}
        onMouseLeave={() => setHovered(null)}
      >
        {earlier.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onMouseEnter={() => setHovered(i)}
            className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors md:py-8"
          >
            <span className="font-display text-2xl font-medium tracking-tight text-bone/70 transition-all duration-500 group-hover:translate-x-4 group-hover:text-bone md:text-4xl">
              {p.title}
            </span>
            <span className="flex items-center gap-4 text-sm text-mute">
              <span className="hidden sm:inline">{p.tags}</span>
              <TbArrowUpRight className="text-xl transition-transform duration-500 group-hover:rotate-45 group-hover:text-accent" />
            </span>
          </motion.a>
        ))}

        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
              className="pointer-events-none absolute left-0 top-0 z-10 hidden h-48 w-72 overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:block"
            >
              <img src={earlier[hovered].img} alt="" className="h-full w-full object-cover" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Projects() {
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const track = trackRef.current;
      const distance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) =>
            setCurrent(Math.min(featured.length - 1, Math.round(self.progress * (featured.length - 1)))),
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="work" className="relative bg-ink py-28 lg:py-0">
      <div ref={pinRef} className="relative lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden">
        <div className="mx-auto mb-12 flex w-full max-w-[1600px] items-end justify-between px-5 md:px-10 lg:mb-8">
          <div>
            <SectionLabel no="02">Selected work</SectionLabel>
            <SplitReveal
              lines={["Things I've", { text: "built lately", className: "font-serif italic font-normal" }]}
              className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tightest text-bone md:text-7xl"
            />
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <span className="font-display text-5xl font-semibold tracking-tightest text-bone">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-mute">/ {String(featured.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex flex-col gap-24 px-5 md:px-10 lg:w-max lg:flex-row lg:gap-16 lg:pr-[14vw]"
        >
          {featured.map((p) => (
            <ProjectPanel key={p.id} p={p} />
          ))}
        </div>
      </div>

      <EarlierWork />
    </section>
  );
}

export default Projects;
