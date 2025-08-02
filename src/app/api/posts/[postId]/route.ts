import { NextResponse } from "next/server";
import { getPostByPostId } from "@/lib/posts";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const post = getPostByPostId(params.postId);

  if (!post) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(post);
}
