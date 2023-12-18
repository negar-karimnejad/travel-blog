import Posts from "@/components/shared/Posts";
import TopPosts from "@/components/shared/TopPosts";
import React from "react";
import prisma from "../utils/db";

export default async function PostsPage() {
  const posts = await prisma.blog.findMany({
    include: {
      user: true,
    },
  });

  return (
    <div>
      <div className="grid lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] max-w-[1450px] mx-auto overflow-y-hidden h-fit mt-10 max-lg:space-y-7">
        <Posts posts={posts} />
        <TopPosts posts={posts} />
      </div>
    </div>
  );
}
