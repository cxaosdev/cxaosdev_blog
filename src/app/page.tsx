import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const dummyTags = ["NextJS", "React", "JavaScript"];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* Tags */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-white">Tags</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {dummyTags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-[#F2AA4C] font-semibold border border-[#F2AA4C] px-3 py-1 rounded-full transition hover:scale-105 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>
      {/* Posts */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-white">Posts</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {posts.map((post) => (
            <Link key={post.postId} href={`/posts/${post.postId}`}>
              <div className="group cursor-pointer">
                <img
                  src={post.thumbnail}
                  className="w-full object-cover rounded-xl group-hover:opacity-80 transition"
                />
                <h3 className="mt-4 text-lg font-medium text-[#F2AA4C] transition line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
