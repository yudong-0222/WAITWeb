import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { serialize } from "next-mdx-remote/serialize";

const contentDirectory = path.join(process.cwd(), "content");

//get ALl posts
export function getAllPosts(type = null) {
  const categories = ["news", "devlog", "wiki"];
  if (type) {
    const targetDir = path.join(contentDirectory, type);
    if (!fs.existsSync(targetDir)) return [];

    const fileNames = fs.readdirSync(targetDir);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(targetDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        return { slug, ...data, type };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }
  return categories
    .flatMap((cat) => getAllPosts(cat))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
//Post ccontent
export async function getPostBySlug(type, slug) {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    console.error("FILE DOES NOT EXIST:", fullPath);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content: content,
  };
}

//Just a simple get func.
export function getAllContent() {
  const news = getAllPosts("news");
  const wiki = getAllPosts("wiki");
  const devlog = getAllPosts("devlog");
  return [...news, ...wiki, ...devlog].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );
}
