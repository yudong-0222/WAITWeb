import { motion } from "motion/react";

export default function GreenBar() {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            "0 0 10px #00FF96",
            "0 0 25px #00FF96",
            "0 0 10px #00FF96",
          ],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="h-0.5 bg-[#00FF96]"
      />
    </>
  );
}
