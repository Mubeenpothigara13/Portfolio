import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../motion";

function SectionLabel({ no, children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-mute ${className}`}
    >
      <span className="text-accent">({no})</span>
      <span className="h-px w-10 bg-white/20" />
      <span>{children}</span>
    </motion.div>
  );
}

export default SectionLabel;
