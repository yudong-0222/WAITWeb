"use client";
import { motion } from "motion/react";
// import {  AnimatePresence } from "motion/react";
// import { useState } from "react";

export default function IPButton() {
  // const [copied, setCopied] = useState(false);
  const ip = "敬請期待！";

  // const copyIP = async () => {
  //   try {
  //     await navigator.clipboard.writeText(ip);
  //     setCopied(true);
  //   } catch (error) {
  //     console.error("Failed to copy server IP:", error);

  //     try {
  //       const Swal = (await import("sweetalert2")).default;
  //       await Swal.fire({
  //         icon: "error",
  //         title: "FAILED",
  //         text: "無法複製伺服器 IP，請手動複製。",
  //       });
  //     } catch (notificationError) {
  //       console.error(
  //         "Failed to show copy error notification:",
  //         notificationError,
  //       );
  //     }

  //     return;
  //   }

  //   try {
  //     const Swal = (await import("sweetalert2")).default;

  //     await Swal.fire({
  //       icon: "success",
  //       title: "SUCCESS",
  //       text: "已成功複製伺服器 IP",
  //     });
  //   } catch (error) {
  //     console.error(
  //       "Copied successfully, but failed to show notification:",
  //       error,
  //     );
  //   }
  // };
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
          onClick={() => {
            window.open(
              "https://discord.gg/RNJQFYbjVp",
              "_blank",
              "noopener,noreferrer",
            );
          }}
          className="px-5 py-2 bg-transparent border border-[#00FF96]/50 text-[#00FF96] text-xs font-bold rounded-md hover:bg-[#00FF96] hover:text-black transition-all duration-200 uppercase"
        >
          {/* {copied ? "Copied!" : "Copy"} */}
          Join Discord
        </motion.button>
      </div>
      {/* A messageg that telling user copied!!!! cool stuff :D */}
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
    </div>
  );
}
