"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";

interface ModeProps {
  mode: {
    title: string;
    description: string;
    theme: string;
    href: string;
  };
  cardVariants?: Variants;
}

export default function ModeCard({ mode, cardVariants }: ModeProps) {
  const isGreen = mode.theme === "tech-green";

  const themeClass = isGreen
    ? "border-[#00FF96]/30 hover:border-[#00FF96] hover:shadow-[0_0_20px_rgba(0,255,150,0.2)]"
    : "border-[#0070f3]/30 hover:border-[#0070f3] hover:shadow-[0_0_20px_rgba(0,112,243,0.2)]";

  const btnClass = isGreen
    ? "bg-[#00FF96] text-black"
    : "bg-[#0070f3] text-white";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2 }}
      className={`relative p-8 bg-black/40 border backdrop-blur-sm rounded-sm ${themeClass}`}
    >
      <h3 className="text-2xl font-bold text-white mb-3 tracking-wider italic">
        {mode.title}
      </h3>

      <p className="text-gray-400 text-sm mb-8 leading-relaxed whitespace-pre-line">
        {mode.description}
      </p>

      <Link
        href={mode.href}
        className={`block w-full py-2 text-center font-bold text-xs uppercase tracking-widest rounded-sm transition-transform active:scale-95 ${btnClass}`}
      >
        View More
      </Link>
    </motion.div>
  );
}
