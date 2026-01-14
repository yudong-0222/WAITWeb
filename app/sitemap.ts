import { MetadataRoute } from "next";
import { getAllContent } from "@/libs/markdown";
import { Post } from "@/types/post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://waitmc.vercel.app";

  const allPosts = getAllContent() as Post[];

  const postUrls = allPosts.map((post) => ({
    url: `${baseUrl}/wiki/${post.type}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const routes = ["", "/wiki"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1.0,
  }));

  return [...routes, ...postUrls];
}
