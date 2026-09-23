import { useState } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";

function StatCounter({ target, suffix = "", label }) {
  const [start, setStart] = useState(false);
  const value = useCountUp(target, { start, duration: 2 });

  return (
    <motion.div
      onViewportEnter={() => setStart(true)}
      viewport={{ once: true, amount: 0.6 }}
    >
      <p className="font-display text-5xl font-semibold tracking-tightest text-bone md:text-6xl">
        {value}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mute">{label}</p>
    </motion.div>
  );
}

export default StatCounter;
