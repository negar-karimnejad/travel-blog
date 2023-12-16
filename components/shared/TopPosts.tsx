import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";
import React from "react";

export default function TopPosts() {
  const topPosts = blogData.filter((item) => item.topPost);

  return (
    <div>
      <p>TopPosts</p>
      {topPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
