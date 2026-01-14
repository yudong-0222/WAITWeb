"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "../../types/post";
import { typeStyles } from "../../types/typeStyle";
import PostCard from "../components/PostCard";

export default function WikiListClient({
  initialPosts,
}: {
  initialPosts: Post[];
}) {
  const allPosts = initialPosts as Post[];
  const [filter, setFilter] = useState("全部");

  const categories = ["全部", "最新公告", "遊戲指南", "開發日誌"];
  // Pin post
  const topStory = allPosts.find((post) => post.isTop) || allPosts[0];

  //Filter
  const filteredPosts = allPosts
    .filter((post) => post.slug !== topStory?.slug)
    .filter((post) => filter === "全部" || post.category === filter);

  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 pb-20 px-6 font-mono">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4">
            Latest <span className="text-[#00FF96]">Intelligence</span>
          </h1>
          <p className="text-gray-500 tracking-widest text-sm uppercase">
            {"// 監控 WAIT NETWORK 的最新動向"}
          </p>
        </header>

        {/* PIN Post */}
        {topStory &&
          (() => {
            const topStyle =
              typeStyles[topStory.type as keyof typeof typeStyles] ||
              typeStyles.wiki;
            return (
              <section className="relative mb-20 group">
                <div
                  className={`absolute left-0 top-0 w-1 h-full z-10 ${
                    topStyle.color.split(" ")[0]
                  }`}
                />
                <Link href={`/wiki/${topStory.type}/${topStory.slug}`}>
                  <div className="relative h-100 w-full overflow-hidden rounded-sm border border-white/5 bg-[#1a1c20]">
                    <Image
                      src={topStory.image}
                      alt={topStory.title}
                      fill
                      className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-10 z-10">
                      <span
                        className={`text-xs font-bold tracking-widest mb-2 block uppercase font-mono ${topStyle.color.replace(
                          "bg-",
                          "text-"
                        )}`}
                      >
                        TOP STORY //{" "}
                        <span
                          className={`${topStyle.text} font-bold uppercase tracking-widest`}
                        >
                          {topStyle.label}
                        </span>
                      </span>
                      <h2 className="text-4xl font-black mb-4 tracking-tighter italic">
                        {topStory.title}
                      </h2>
                      <p className="text-gray-400 text-sm max-w-xl mb-6 font-sans">
                        {topStory.description}
                      </p>
                      <button
                        className={`px-6 py-2 font-bold text-xs transition-colors ${topStyle.color} hover:opacity-80 pointer-events-none`}
                      >
                        VIEW FULL REPORT
                      </button>
                    </div>
                  </div>
                </Link>
              </section>
            );
          })()}

        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-48 shrink-0">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-gray-500">
              Filters
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-left px-4 py-2 text-xs font-bold border-l-2 transition-all ${
                    filter === cat
                      ? "border-[#00FF96] text-[#00FF96] bg-[#00FF96]/5"
                      : "border-transparent text-gray-600 hover:text-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>
          <main className="flex-1">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
              News Feed <div className="h-px flex-1 bg-white/5" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                return (
                  <PostCard key={post.slug} post={post} isAnimated={true} />
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
