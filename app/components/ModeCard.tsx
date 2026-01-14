"use client";
import { motion } from "motion/react";
import Link from "next/link";

interface ModeProps {
  mode: {
    title: string;
    description: string;
    theme: string;
    href: string;
  };
}

export default function ModeCard({ mode }: ModeProps) {
  const isGreen = mode.theme === "tech-green";
  const themeClass = isGreen
    ? "border-[#00FF96]/30 hover:border-[#00FF96] hover:shadow-[0_0_20px_rgba(0,255,150,0.2)]"
    : "border-[#0070f3]/30 hover:border-[#0070f3] hover:shadow-[0_0_20px_rgba(0,112,243,0.2)]";

  const btnClass = isGreen
    ? "bg-[#00FF96] text-black"
    : "bg-[#0070f3] text-white";

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative p-8 bg-black/40 border backdrop-blur-sm rounded-sm transition-all duration-50 ${themeClass}`}
    >
      {/* Todo: Icons sources: */}
      {/* <div className="text-4xl mb-6">{mode.icon}</div> */}
      <h3 className="text-2xl font-bold text-white mb-3 tracking-wider italic">
        {mode.title}
      </h3>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed whitespace-pre-line">
        {mode.description}
      </p>

      <Link href={mode.href}>
        <button
          className={`w-full py-2 font-bold text-xs uppercase tracking-widest rounded-sm transition-transform active:scale-95 ${btnClass}`}
        >
          View More
        </button>
      </Link>
    </motion.div>
  );
}
