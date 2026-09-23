import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { NAV_IDS, NAV_LINKS, SOCIALS } from "../lib/nav";
import { scrollToSection, startScroll, stopScroll } from "../lib/scroll";
import { useActiveSection } from "../hooks/useActiveSection";
import { EASE, EASE_IN_OUT } from "../motion";
import Magnetic from "./ui/Magnetic";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_IDS);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200);
    setScrolled(y > 40);
  });

  useEffect(() => {
    if (menuOpen) stopScroll();
    else startScroll();
  }, [menuOpen]);

  const go = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    // Wait for the menu to start closing so Lenis is running again.
    setTimeout(() => scrollToSection(id), menuOpen ? 350 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden && !menuOpen ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !menuOpen ? "bg-ink/70 backdrop-blur-xl" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10">
          <a
            href="#home"
            onClick={go("home")}
            className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-bone text-xs font-bold text-ink transition-transform duration-500 group-hover:rotate-[360deg]">
              MP
            </span>
            <span className="hidden sm:inline">
              Mubeen<span className="text-accent">©</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md md:flex">
            {NAV_LINKS.filter((l) => l.id !== "home" && l.id !== "contact").map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={go(l.id)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id ? "text-ink" : "text-bone/80 hover:text-bone"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-bone"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden md:inline-block">
              <a
                href="#contact"
                onClick={go("contact")}
                className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                Let&apos;s talk
              </a>
            </Magnetic>

            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 md:hidden"
            >
              <span
                className={`absolute h-px w-5 bg-bone transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-bone transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: EASE_IN_OUT }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#111113] px-6 pb-10 pt-28 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <div key={l.id} className="overflow-hidden">
                  <motion.a
                    href={`#${l.id}`}
                    onClick={go(l.id)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.7, ease: EASE }}
                    className={`flex items-baseline gap-3 font-display text-5xl font-semibold tracking-tight ${
                      active === l.id ? "text-accent" : "text-bone"
                    }`}
                  >
                    <span className="text-xs text-mute">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                </div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 text-sm text-mute"
            >
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
