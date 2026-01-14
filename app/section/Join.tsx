"use client";
import { motion } from "motion/react";
import Radar from "../components/Radar";
import Swal from "sweetalert2";

export default function Join() {
  const ip = "waitmc.top";

  const copyIP = () => {
    navigator.clipboard.writeText(ip);
    Swal.fire({
      title: "SYSTEM DECODED",
      text: "伺服器 IP 已成功存入剪貼簿",
      icon: "success",
      background: "#0a0a0b",
      color: "#00FF96",
      confirmButtonColor: "#00FF96",
      buttonsStyling: true,
      customClass: {
        popup: "border border-[#00FF96]/30 font-mono",
      },
    });
  };

  return (
    <section className="relative py-20 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto relative group">
        <div className="absolute -inset-1 bg-linear-to-r from-[#00FF96]/20 to-[#5865F2]/20 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 bg-[#1a1c20] border border-white/10 p-8 md:p-12 rounded-xl overflow-hidden shadow-2xl">
          {/* Rader */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none scale-100 group-hover:opacity-40 transition-opacity duration-400">
            <Radar />
          </div>

          {/* Text area */}
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-black mb-4 tracking-tighter italic">
              準備好{" "}
              <span className="text-[#00FF96] animate-pulse">加入戰場</span>{" "}
              了嗎？
            </h2>
            <p className="text-gray-400 font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center md:justify-start gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF96] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF96]" />
              </span>{" "}
              {"SND Matches Now Active"}
            </p>
          </div>

          {/* BTNS */}
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://discord.gg/RNJQFYbjVp"
              className="px-8 py-4 bg-[#5865F2] text-white font-bold rounded-sm shadow-[0_10px_20px_rgba(88,101,242,0.2)] flex items-center justify-center gap-2"
            >
              <span>JOIN DISCORD</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyIP}
              className="px-8 py-4 bg-transparent border-2 border-[#00FF96] text-[#00FF96] font-bold rounded-sm hover:bg-[#00FF96] hover:text-black transition-all shadow-[0_10px_20px_rgba(0,255,150,0.1)] flex items-center justify-center"
            >
              COPY SERVER IP
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
