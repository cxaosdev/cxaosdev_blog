import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <PostList posts={posts} />
    </main>
  );
}
