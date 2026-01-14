"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { handlePlayNow } from "../function//handlePlayNow";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "MODE", href: "/#mode" },
  { name: "MAPS", href: "/#maps" },
  { name: "WIKI", href: "/wiki" },
  { name: "STORE", href: "/" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      // motion animation
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-500 py-6 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-icon-blue rounded-sm flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_20px_rgba(0,112,243,0.6)] transition-all"
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </motion.div>
          <span className="font-bold tracking-wide text-white text-xl">
            WAIT NETWORK
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-widest"
            >
              {link.name}
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00FF96] shadow-[0_0_8px_#00FF96]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </Link>
          ))}
        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(0, 255, 150, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-[#00FF96] text-white font-bold text-sm rounded-sm uppercase"
          onClick={handlePlayNow}
        >
          Play Now
        </motion.button>
      </div>
    </motion.nav>
  );
}
