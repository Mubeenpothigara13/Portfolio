import { motion } from "framer-motion";
import { EASE } from "../../motion";

const word = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.1, ease: EASE } },
};

/**
 * Masked word-by-word reveal. `lines` is an array of strings or
 * { text, className } objects, each rendered on its own line.
 */
function SplitReveal({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.06,
  animate,
}) {
  const MotionTag = motion[Tag] ?? motion.h2;
  const trigger = animate
    ? { initial: "hidden", animate }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.4 } };

  return (
    <MotionTag
      className={className}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...trigger}
    >
      {lines.map((line, i) => {
        const { text, className: lineClass = "" } =
          typeof line === "string" ? { text: line } : line;
        return (
          <span key={i} className={`block ${lineClass}`}>
            {text.split(" ").map((w, j) => (
              <span key={j} className="word-mask">
                <motion.span variants={word} className="inline-block">
                  {w}
                  {" "}
                </motion.span>
              </span>
            ))}
          </span>
        );
      })}
    </MotionTag>
  );
}

export default SplitReveal;
