import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

// Elements with data-cursor="<label>" grow the cursor into a labelled disc.
function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const labelled = e.target.closest?.("[data-cursor]");
      setLabel(labelled ? labelled.getAttribute("data-cursor") : "");
      setHovering(!!e.target.closest?.("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 96 : hovering ? 48 : 10;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full ${
        label ? "bg-accent" : "bg-bone mix-blend-difference"
      }`}
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: size, height: size }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence>
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-ink"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CustomCursor;
