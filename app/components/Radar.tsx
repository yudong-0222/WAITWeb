"use client";
import { motion } from "motion/react";

export default function Radar() {
  return (
    <div className="relative w-125 h-125 flex items-center justify-center">
      {/* static background circle & tick of each route*/}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute border border-[#00FF96]/20 rounded-full"
          style={{ width: `${(i + 1) * 25}%`, height: `${(i + 1) * 25}%` }}
        />
      ))}

      {/* Cross Line */}
      <div className="absolute w-full h-px bg-[#00FF96]/10" />
      <div className="absolute h-full w-px bg-[#00FF96]/10" />

      {/* Spining wave */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute w-full h-full rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(0, 255, 150, 0.2) 90deg, transparent 100deg)",
        }}
      />

      {/* Some point be detected */}
      <Blip delay={1.0} x="20%" y="40%" />
      <Blip delay={3.5} x="70%" y="60%" />
      <Blip delay={4.5} x="20%" y="60%" />

      {/* Center point */}
      <div className="absolute w-2 h-2 bg-[#00FF96] rounded-full shadow-[0_0_15px_#00FF96]" />
    </div>
  );
}

//Blip => 雷達偵測到的點。
function Blip({ x, y, delay }: { x: string; y: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 2, delay: delay }}
      className="absolute w-1.5 h-1.5 bg-[#00FF96] rounded-full shadow-[0_0_8px_#00FF96]"
      style={{ left: x, top: y }}
    />
  );
}
