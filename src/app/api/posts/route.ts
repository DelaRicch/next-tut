import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();

    const getUsername = username ? { username } : {};
    const posts = await Post.find(getUsername);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};



export const POST = async (request: any) => {
  const body = await request.json()
console.log(body);

  const newPost  = new Post(body)

  try {
    await connect();
    await newPost.save()


    return new NextResponse("Post has been created", { status: 201 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};