import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, EASE_IN_OUT } from "../motion";

const WORDS = ["Design", "Code", "Motion", "AI", "Mubeen"];

function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const durationMs = 2000;
    let raf;
    let timer;
    const tick = (now) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else timer = setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  const wordIndex = Math.min(Math.floor(progress / 20), WORDS.length - 1);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!done && (
        <motion.div
          key="loader"
          exit={{ y: "-100%", transition: { duration: 1, ease: EASE_IN_OUT } }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#0e0e10] p-6 md:p-10"
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-mute">
            <span>Mubeen Pothigara</span>
            <span>Portfolio ©{new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center justify-center">
            <div className="h-[1.2em] overflow-hidden font-serif text-5xl italic text-bone md:text-7xl">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={WORDS[wordIndex]}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="block"
                >
                  {WORDS[wordIndex]}
                  <span className="text-accent">.</span>
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="h-px w-1/2 overflow-hidden bg-white/10">
              <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
            </div>
            <span className="font-display text-6xl font-semibold leading-none tracking-tightest text-bone md:text-[9rem]">
              {String(progress).padStart(3, "0")}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
