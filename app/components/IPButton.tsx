"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function IPButton() {
  const [copied, setCopied] = useState(false);
  const ip = "waitmc.top";

  const copyIP = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);

    Swal.fire({
      title: "SUCCESS",
      text: "已成功複製伺服器 IP",
      icon: "success",
      background: "#050a10",
      color: "#fff",
      confirmButtonColor: "#00FF96",
    });

    //After
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex items-center group">
      <div className="flex items-center bg-black/60 border border-white/10 rounded-md p-1 pl-4 backdrop-blur-sm shadow-2xl">
        <div className="flex items-center gap-3 pr-4">
          <span className="text-gray-500 font-mono text-sm border-r border-white/10 pr-3">
            IP
          </span>
          <span className="text-[#00FF96] font-mono font-bold tracking-wider">
            {ip}
          </span>
        </div>
        {/* COPY Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyIP}
          className="px-5 py-2 bg-transparent border border-[#00FF96]/50 text-[#00FF96] text-xs font-bold rounded-md hover:bg-[#00FF96] hover:text-black transition-all duration-200 uppercase"
        >
          {copied ? "Copied!" : "Copy"}
        </motion.button>
      </div>
      {/* A messageg that telling user copied!!!! cool stuff :D */}
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 10 }}
            exit={{ opacity: 0, x: 20 }}
            className="text-[#00FF96] text-xs font-mono italic"
          >
            {"// COPIED_SUCCESS"}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
