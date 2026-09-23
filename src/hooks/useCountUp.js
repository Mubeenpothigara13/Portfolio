import { useEffect, useRef, useState } from "react";

export function useCountUp(target, { duration = 1.6, start = false } = {}) {
  const [value, setValue] = useState(0);
  const raf = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;

    const from = 0;
    const t0 = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - t0) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [start, target, duration]);

  return value;
}
