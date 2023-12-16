import { blogData } from "@/constants/blogData";
import React from "react";
import BlogCard from "./BlogCard";

export default function LatestPosts() {
  const latestPosts = blogData.filter((item) => item.latestPost);

  return (
    <div>
      <p>LATEST POSTS</p>
      {latestPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
