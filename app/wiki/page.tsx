import { getAllContent } from "../../libs/markdown";
import WikiListClient from "./WikiListClient";
import { Post } from "../../types/post";
import Navbar from "../components/Navbar";
import Footer from "../section/Footer";

export default function Page() {
  const allPosts = getAllContent() as Post[];
  return (
    <main>
      <Navbar />
      <WikiListClient initialPosts={allPosts} />
      <Footer />
    </main>
  );
}
