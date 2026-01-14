import { motion, Variants } from "motion/react";

export default function ComingSoon(cardVariants: Variants | undefined) {
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="relative p-8 bg-black/10 border border-dashed border-white/10 backdrop-blur-[2px] rounded-sm flex flex-col justify-center items-center text-center group overflow-hidden"
      >
        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-16 h-16 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 border-2 border-t-[#00FF96]/30 border-r-transparent border-b-white/5 border-l-transparent rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-600 font-mono text-xl group-hover:text-[#00FF96] transition-colors">
              ?
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-500 mb-2 tracking-widest uppercase italic">
          Project{" "}
          <span className="bg-gray-700 text-transparent select-none">
            REDACTED
          </span>
        </h3>

        <p className="text-[10px] font-mono text-gray-600 group-hover:text-gray-400 transition-colors uppercase">
          {"// Status: [DECODING_DATA...]"} <br />
          {"//Access: [RESTRICTED]"}
        </p>

        <div className="mt-8 w-full py-2 border border-white/5 text-gray-700 text-[10px] font-bold uppercase tracking-[0.2em]">
          Locked
        </div>
      </motion.div>
    </>
  );
}
