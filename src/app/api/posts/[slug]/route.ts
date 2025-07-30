import { NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/posts";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(post);
}
