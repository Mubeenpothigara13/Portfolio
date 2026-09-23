import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS, SOCIALS } from "./lib/nav";
import { scrollToSection } from "./lib/scroll";

function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-white/10 bg-ink px-5 pt-16 md:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-10 text-sm md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="max-w-xs text-mute">
            Designed &amp; built by Mubeen Pothigara with React, Three.js, GSAP and a lot of chai.
          </p>
        </div>
        <ul className="space-y-2">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button onClick={() => scrollToSection(l.id)} className="text-bone/80 transition-colors hover:text-accent">
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="text-bone/80 transition-colors hover:text-accent">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <button onClick={() => scrollToSection("home")} className="mt-4 text-accent">
              Back to top ↑
            </button>
          </li>
        </ul>
      </div>

      <motion.p
        style={{ y }}
        aria-hidden
        className="mt-16 select-none whitespace-nowrap text-center font-display text-[21vw] font-bold leading-[0.8] tracking-tightest text-bone"
      >
        MUBEEN<span className="text-accent">.</span>
      </motion.p>

      <div className="mx-auto flex max-w-[1600px] justify-between border-t border-white/10 py-5 text-xs uppercase tracking-[0.2em] text-mute">
        <span>© {new Date().getFullYear()} Mubeen Pothigara</span>
        <span>Gujarat, India</span>
      </div>
    </footer>
  );
}

export default Footer;
