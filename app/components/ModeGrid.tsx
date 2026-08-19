"use client";

import { motion, type Variants } from "motion/react";
import ModeCard from "./ModeCard";
import ComingSoon from "./ComingSoon";

interface ModeItem {
  id: string | number;
  title: string;
  description: string;
  theme: string;
  href: string;
}

interface ModesGridProps {
  modes: ModeItem[];
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ModesGrid({ modes }: ModesGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {modes.map((item) => (
        <ModeCard key={item.id} mode={item} cardVariants={cardVariants} />
      ))}

      <ComingSoon cardVariants={cardVariants} />
    </motion.div>
  );
}
