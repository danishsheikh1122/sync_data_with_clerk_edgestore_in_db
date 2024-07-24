import { auth, User } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
export async function POST(req: NextRequest) {
  // if (!userId)
  //   return NextResponse.json({ status: 401, message: "unauthorized" });

  const data = await req.json(); //remember to await and req.josn() you forget it every time

  if (!data)
    return NextResponse.json({ status: 404, message: "data not received" });

  // console.log(data.url);
  const user = await prisma.user.findUnique({
    where: { clerkId: data?.clerkId, email: data?.email },
  });
  if (!user)
    return NextResponse.json({ status: 404, message: "user not found" });
  console.log(user);
  const createPost = {
    userId: data.userId,
    urls: data.urls.map((url: string) => ({ url })), // Convert each URL string to an object
  };
  // Create the post and associated URLs
  console.log(user.id)
  const newPost = await prisma.post.create({
    data: {
      userId: user.id,
      urls: {
        create: createPost.urls,
      },
    },
    include: {
      urls: true, // Include the urls in the response for verification
    },
  });
  return NextResponse.json({ status: 200, message: "OK" });
}
