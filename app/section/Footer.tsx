"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0b] border-t border-white/5 pt-16 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* LOGO */}
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-black italic tracking-tighter">
              WAIT<span className="text-[#00FF96]">MC</span>
            </h2>
            <p className="text-gray-500 text-xs font-mono leading-relaxed max-w-xs">
              新世代的 Minecraft
              槍戰伺服器。專為精準、策略、競技性而生。Next-generation tactical
              Minecraft network. Built for precision, strategy, and competitive
              gameplay.
            </p>
            {/* SYSTYME STATUS dot */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#00FF96]/60">
              <span className="w-1.5 h-1.5 bg-[#00FF96] rounded-full animate-pulse" />
              ALL_SYSTEMS_WORKS
            </div>
          </div>

          {/* Naviagtiron and links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 text-gray-500 text-xs font-mono">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#00FF96] transition-colors cursor-pointer tracking-tighter hover:translate-x-1 duration-300"
                  >
                    {"//"} HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="#maps"
                    className="hover:text-[#00FF96] transition-colors cursor-pointer tracking-tighter hover:translate-x-1 duration-300"
                  >
                    {"//"} BATTLEGROUND
                  </Link>
                </li>
                <li>
                  <Link
                    href="#mode"
                    className="hover:text-[#00FF96] transition-colors cursor-pointer tracking-tighter hover:translate-x-1 duration-300"
                  >
                    {"//"} MODES
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                Community
              </h4>
              <ul className="space-y-2 text-gray-500 text-xs font-mono">
                <li>
                  <Link
                    href="https://discord.gg/RNJQFYbjVp"
                    className="hover:text-[#00FF96] transition-colors cursor-pointer tracking-tighter hover:translate-x-1 duration-300"
                  >
                    {"//"} DISCORD
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#00FF96] transition-colors cursor-pointer tracking-tighter hover:translate-x-1 duration-300"
                  >
                    {"//"} WIKI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#00FF96] transition-colors cursor-pointer tracking-tighter hover:translate-x-1 duration-300"
                  >
                    {"//"} STORE
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* some copyright and delaclre */}
          <div className="flex flex-col md:items-end justify-start">
            <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              Compliance
            </h4>
            <p className="text-gray-600 text-[10px] font-mono md:text-right leading-relaxed">
              Not an official Minecraft product. <br />
              Not approved by or associated with Mojang or Microsoft. <br />
              All rights reserved.
            </p>
          </div>
        </div>

        {/* COPRGIHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[9px] font-mono tracking-widest uppercase">
            © {currentYear} WAIT NETWORK //
          </p>
          <div className="flex gap-6">
            <div className="text-gray-700 text-[9px] font-mono">
              ENCRYPTED_SSL
            </div>
            <div className="text-gray-700 text-[9px] font-mono">
              V2.4.0_PROD
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
