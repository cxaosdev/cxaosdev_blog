import { marked } from "marked";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const post = await res.json();
  const html = marked(post.content);

  return (
    <article className="prose prose-invert prose-lg md:prose-xl lg:prose-xl mx-auto px-6 py-10">
      <h1 className="text-center">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
  