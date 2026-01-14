"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import mapsData from "../../datas/maps.json";
import GreenBar from "../components/GreenBar";

const categories = ["ALL", "SND", "DUEL", "REALISTIC"];

export default function Map() {
  const [activeTab, setActiveTab] = useState("ALL");
  const filteredMaps =
    activeTab === "ALL"
      ? mapsData
      : mapsData.filter((map) => map.category === activeTab);

  return (
    <section id={"maps"} className="bg-dark-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 inline-block">
          <h2 className="text-white text-2xl font-bold tracking-widest mb-2 uppercase">
            Explore the Battlegrounds
          </h2>
          <GreenBar />
        </div>

        <div className="flex gap-4 mb-12 border-b border-white/10 pb-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveTab(c)}
              className={`px-6 py-2 text-xs font-bold tracking-widest transition-all relative ${
                activeTab === c
                  ? "text-[#00FF96]"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {c}
              {activeTab === c && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-4.25 left-0 right-0 h-0.5 bg-[#00FF96] shadow-[0_0_8px_#00FF96]"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMaps.map((map) => (
              <motion.div
                key={map.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                {/* Image CContainter*/}
                <div className="relative aspect-video rounded-md overflow-hidden border border-white/5 bg-black">
                  <Image
                    src={map.image}
                    alt={map.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* grow up inside */}
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]" />
                </div>

                {/* Text and some info */}
                <div className="mt-6 text-center">
                  <h3 className="text-white text-2xl font-bold tracking-tight mb-2">
                    {map.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                    {map.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="mt-16 flex justify-center">
          <button
            className="px-10 py-3 border border-[#00FF96]/50 text-[#00FF96] font-bold text-sm uppercase tracking-widest hover:bg-[#00FF96] hover:text-black transition-all rounded-sm"
            onClick={() => {
              setActiveTab("ALL");
            }}
          >
            View All Maps
          </button>
        </div>
      </div>
    </section>
  );
}
