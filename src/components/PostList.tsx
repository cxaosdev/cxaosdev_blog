"use client";
import Link from "next/link";
import { useState } from "react";
import { Post } from "@/types/post";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  const [selectedTag, setSelectedTag] = useState<string>("전체");
  const tags = Array.from(
    new Set(posts.flatMap((post) => post.tags ?? []))
  ).sort();
  const allTags = ["전체", ...tags];
  const handleTag = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? "전체" : tag));
  };
  const filteredPosts =
    selectedTag === "전체"
      ? posts
      : posts.filter((post) =>
          post.tags.some(
            (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
          )
        );

  return (
    <>
      {/* Tags */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-white">Tags</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <span
              key={tag}
              onClick={() => handleTag(tag)}
              className={`text-sm font-semibold border px-3 py-1 rounded-full transition hover:scale-105 cursor-pointer ${
                selectedTag?.toLowerCase() === tag.toLowerCase()
                  ? "bg-primary text-black border-primary"
                  : "text-primary border-primary"
              }`}
            >
              {tag === "전체" ? "전체" : `#${tag}`}
            </span>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-white">Posts</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.postId} href={`/posts/${post.postId}`}>
              <div className="cursor-pointer">
                <img
                  src={post.thumbnail}
                  className="w-full object-cover rounded-xl hover:opacity-80 transition"
                  alt={post.title}
                />
                <h3 className="mt-4 text-lg font-medium text-primary transition line-clamp-1">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
