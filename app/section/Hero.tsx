"use client";
import Image from "next/image";
import IPButton from "../components/IPButton";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="WaitNetwork Hero"
        fill
        className="object-cover "
        priority
      />
      {/* Make a little grediant that make hero Image looks better */}
      {/* <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" /> */}
      {/*  Content  */}
      {/* remember same with the navBar: */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        {" "}
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-4">
            WAIT
            <span className="text-icon-blue"> Network</span>
          </h1>
          <p className="text-gray-300 text-xl mb-8">
            經典爆破 / 單挑對決 / 寫實模式 / FPS in Minecraft!
          </p>
          <IPButton />
        </div>
      </div>
    </section>
  );
}
