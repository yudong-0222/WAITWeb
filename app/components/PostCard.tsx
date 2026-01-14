"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Post } from "@/types/post";
import { typeStyles } from "@/types/typeStyle";

interface PostCardProps {
  post: Post;
  isAnimated?: boolean; //animamtion is ooptijnal
}

export default function PostCard({ post, isAnimated = false }: PostCardProps) {
  const style =
    typeStyles[post.type as keyof typeof typeStyles] || typeStyles.wiki;

  const content = (
    <div className="bg-[#131417] border border-white/5 p-5 group hover:border-[#00FF96]/30 transition-all rounded-sm flex flex-col h-full">
      <Link href={`/wiki/${post.type}/${post.slug}`}>
        {/* pictuge */}
        <div className="h-40 mb-4 overflow-hidden relative border border-white/5">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div
            className={`absolute top-2 left-2 px-2 py-1 text-[9px] font-bold z-10 transition-all ${style.color} ${style.glow}`}
          >
            {style.label}
          </div>
        </div>

        {/* contetxt */}
        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#00FF96] transition-colors leading-tight">
          {post.title}
        </h4>
        <p className="text-gray-500 text-xs line-clamp-2 font-sans mb-4">
          {post.description}
        </p>

        {/* date adn years */}
        <div className="mt-auto flex justify-between items-center text-[10px] text-gray-600 border-t border-white/5 pt-4">
          <span>{post.date}</span>
          <span className="group-hover:text-[#00FF96] transition-colors uppercase">
            READ REPORT_
          </span>
        </div>
      </Link>
    </div>
  );

  //animation optional function:
  if (isAnimated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
