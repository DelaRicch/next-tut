import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

interface PostProps {
    params: {
        id: string
    }
}

export const GET = async (request: any, {params}: PostProps) => {

    const {id} = params

  try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
