"use client";
import { blogData } from "@/constants/blogData";
import { useState } from "react";
import Button from "../ui/Button";
import BlogCard from "./BlogCard";

export default function Posts() {
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const showMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };
  return (
    <section className="col-span-2" aria-labelledby="latest-post">
      <div className="w-full text-center">
        <h2
          id="latest-post"
          className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10"
        >
          Latest Post
        </h2>
      </div>
      <div className="flex flex-col gap-10 h-full">
        {blogData.slice(0, visibleBlogs).map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
        {blogData.length > visibleBlogs && (
          <div className="flex justify-center">
            <Button
              onClick={showMoreBlogs}
              text="Show more"
              aria="Show more blog post"
            />
          </div>
        )}
      </div>
    </section>
  );
}
