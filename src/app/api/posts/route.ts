import mongoose from "mongoose";

import { NextResponse, NextRequest } from "next/server";
import { connectionString } from "../../../../lib/mongo";
import { Post } from "../../../../lib/model/post";

try {
  await mongoose
    .connect(connectionString)
    .then(() => console.log("connected to MongoDB"));
} catch (err) {
  throw new Error();
}

export async function GET() {
  const res = await Post.find();
  return NextResponse.json({ res });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { title, text } = await req.json();
  if (!title || !text)
    return NextResponse.json({ message: "title and text is required" });
  try {
    await Post.create({
      title,
      text,
    });
  } catch (err) {
    console.log("Post create error: ", err);
  }

  return NextResponse.json({ message: "the post been created" });
}
