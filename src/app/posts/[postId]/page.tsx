import { marked } from "marked";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.postId}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const post = await res.json();
  const html = marked(post.content);

  return (
    <article className="prose prose-invert prose-md max-w-lg md:prose-lg md:max-w-2xl lg:max-w-4xl mx-auto py-10">
      <h1 className="text-center">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
