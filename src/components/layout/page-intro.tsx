"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PageIntro() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  const curtainTransition = {
    duration: 0.9,
    delay: 0.75,
    ease: [0.76, 0, 0.24, 1] as const,
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        delay: 1.6,
      }}
      className="pointer-events-none fixed inset-0 z-[100]"
      aria-hidden="true"
    >
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-101%" }}
        transition={curtainTransition}
        className="absolute inset-y-0 left-0 w-1/2 border-r border-primary/15 bg-[#05080c]"
      >
        <div className="absolute right-8 top-1/2 -translate-y-1/2 font-mono text-[clamp(6rem,17vw,14rem)] font-light leading-none text-primary/80">
          {"{"}
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "101%" }}
        transition={curtainTransition}
        className="absolute inset-y-0 right-0 w-1/2 border-l border-primary/15 bg-[#05080c]"
      >
        <div className="absolute left-8 top-1/2 -translate-y-1/2 font-mono text-[clamp(6rem,17vw,14rem)] font-light leading-none text-primary/80">
          {"}"}
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.9, 1, 1, 0.98],
        }}
        transition={{
          duration: 1.35,
          times: [0, 0.18, 0.72, 1],
          ease: "easeOut",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="flex items-baseline">
          <span className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            MIQ
          </span>
          <span className="text-3xl font-semibold text-primary sm:text-4xl">
            .
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{
          duration: 1.3,
          times: [0, 0.22, 0.72, 1],
        }}
        className="absolute left-1/2 top-[calc(50%+3.5rem)] h-px w-24 -translate-x-1/2 origin-center bg-primary"
      />
    </motion.div>
  );
}