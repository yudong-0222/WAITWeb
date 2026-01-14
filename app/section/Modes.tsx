"use client";

import { useEffect, useState } from "react";
import modesData from "../../datas/modes.json";
import keyWord from "../../datas/keywords.json";
import ComingSoon from "../components/ComingSoon";
import GreenBar from "../components/GreenBar";
import ModeCard from "../components/ModeCard";
import { AnimatePresence, motion } from "motion/react";

//popop animation, which means each childer will appear after his father
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.9,
      when: "beforeChildren",
    },
  },
};

export default function Modes() {
  const [termIndex, setTermIndex] = useState(0);
  const terms = keyWord.bg_terms || ["MODES"];

  useEffect(() => {
    const t = setInterval(() => {
      setTermIndex((p) => (p + 1) % terms.length);
    }, 3500);
    return () => clearInterval(t);
  }, [terms.length]);

  return (
    <section
      id={"mode"}
      className="overflow-hidden relative bg-dark-bg py-25 px-6 min-h-[80vh] "
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-white/2 select-none pointer-events-none tracking-tighter italic">
        <AnimatePresence mode="wait">
          <motion.div
            key={terms[termIndex]}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 0.03, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-[25rem] font-black text-white tracking-tighter italic uppercase"
          >
            {terms[termIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-12 inline-block">
          <h2 className="text-white text-2xl font-bold tracking-widest mb-2">
            FEATURED MODES
          </h2>
          {/* <div className="h-0.5 w-40 bg-tech-green shadow-[0_0_10px_#00FF96]" /> */}
          {/* <div className="h-[1.5px] w-40 bg-[#00FF96] shadow-[0_0_12px_#00FF96,0_0_4px_#fff]" /> */}
          <GreenBar />
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {modesData.map((item) => (
            <ModeCard key={item.id} mode={item} />
          ))}
          <ComingSoon cardVariants={variants} />
        </motion.div>
      </div>
    </section>
  );
}
