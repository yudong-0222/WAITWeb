"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import keyWord from "../../datas/keywords.json";

export default function ModeBackground() {
  const [termIndex, setTermIndex] = useState(0);
  const terms = keyWord.bg_terms || ["MODES"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTermIndex((prev) => (prev + 1) % terms.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [terms.length]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-white/2 select-none pointer-events-none tracking-tighter italic">
      <AnimatePresence mode="wait">
        <motion.div
          key={terms[termIndex]}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-[25rem] font-black text-white tracking-tighter italic uppercase"
        >
          {terms[termIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
