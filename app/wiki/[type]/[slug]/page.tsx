import { getPostBySlug } from "../../../../libs/markdown";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import { parseHeadings } from "@/libs/parseHeadings";
import rehypeSlug from "rehype-slug";

export default async function PostPage({
  params,
}: {
  params: Promise<{ type: string; slug: string }>;
}) {
  const { type, slug } = await params;
  const post = await getPostBySlug(type, slug);

  if (!post) return notFound();

  const headings = parseHeadings(post.content);

  const proseStyles = `
    /* Basic Skeleton */
    prose prose-invert prose-emerald max-w-none font-sans text-sm md:text-base    
    
    /* Title  */
    prose-headings:italic prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase

    /* Links Hover */
    prose-a:no-underline 
    prose-a:text-emerald-500 
    prose-a:transition-all 
    prose-a:duration-200
    prose-a:border-b prose-a:border-emerald-500/20
    [&_a:hover]:text-[#00FF96]
    [&_a:hover]:border-[#00FF96]
    [&_a:hover]:drop-shadow-[0_0_5px_rgba(0,255,150,0.4)]

    /* Code Block x RehypeHighlight */
    prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 
    prose-pre:rounded-lg prose-pre:shadow-2xl prose-pre:font-mono prose-pre:text-sm
    [&_pre_code]:bg-transparent [&_pre_code]:p-0
    
    /* Inline Code  */
    [&_code:before]:content-none [&_code:after]:content-none
    prose-code:bg-[#00FF96]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm
    
    /* Quoote */
    [&_blockquote_p:before]:content-none [&_blockquote_p:after]:content-none
    prose-blockquote:border-l-[#00FF96] prose-blockquote:bg-[#00FF96]/5 
    prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:italic

    /* Picutre bodarder */
    prose-img:rounded-xl 
    prose-img:border 
    prose-img:border-white/10 
    prose-img:shadow-lg
    [&_img]:my-8
  `;

  return (
    <article className="min-h-screen bg-bg-dark text-white pt-32 pb-20 px-6">
      {" "}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 min-w-0 w-full">
          <Link
            href="/wiki"
            className="text-[#00FF96] text-xs font-mono mb-8 inline-block hover:-translate-x-1 transition-transform"
          >
            {"< BACK_TO_DATABASE"}
          </Link>

          {/* TITLE */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-2 py-1 bg-[#00FF96]/10 text-[#00FF96] text-[10px] font-bold border border-[#00FF96]/20">
                {post.frontmatter.category}
              </span>
              <span className="text-gray-600 text-[10px] font-mono">
                RECEIVED: {post.frontmatter.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-6 uppercase">
              {post.frontmatter.title}
            </h1>
            {post.frontmatter.image && (
              <div className="relative h-75 w-full mb-8">
                <Image
                  src={post.frontmatter.image}
                  alt="cover"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            )}
          </header>

          {/* Post content redernign*/}
          {/* Proose: a cool thing to make md -> html rendering */}
          <div className={proseStyles}>
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight, rehypeSlug],
                },
              }}
            />
          </div>
          {/* Footer  */}
          <div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-700">
            <span>END_OF_TRANSMISSION</span>
            <span>WAIT_INTEL</span>
          </div>
        </div>

        {/* TOC - PC */}
        <aside className="hidden lg:block w-64 sticky top-32 shrink-0">
          <div className="border-l border-white/5 pl-6">
            <h3 className="text-[#00FF96] font-mono text-[10px] mb-6 tracking-[0.2em] uppercase opacity-50">
              {"// Contents_Index"}
            </h3>
            <nav className="flex flex-col gap-4">
              {headings.map((heading) => (
                <a
                  key={heading.key}
                  href={`#${heading.id}`}
                  className={`text-[14px] uppercase tracking-wider transition-all duration-300 hover:text-[#00FF96] ${
                    heading.level === 1
                      ? "text-white font-black mb-1" //h1 bigger
                      : heading.level === 3
                      ? "pl-4 text-gray-600 border-l border-transparent hover:border-[#00FF96]/30"
                      : "pl-2 text-gray-400 font-bold"
                  }`}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </article>
  );
}
