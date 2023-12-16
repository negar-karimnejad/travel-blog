import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";
import Link from "next/link";
import Image from "next/image";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";

export default function TopPosts() {
  const topPosts = blogData.filter((item) => item.topPost);

  return (
    <section aria-labelledby="latest-post">
      <div className="w-full text-center">
        <h2
          id="top-post"
          className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10"
        >
          Top Post
        </h2>
      </div>
      <div className="flex flex-col gap-12 h-full items-center">
        {topPosts.map((post) => (
          <Link
            href={{
              pathname: `blog/${post.id}`,
              query: { ...post },
            }}
          >
            <article key={post.id}>
              <div className="relative cursor-pointer">
                <Image
                  src={post.image_path}
                  width={800}
                  height={800}
                  alt={`Image for ${post.title}`}
                />
                <Overlay />
              </div>
              <div className="w-full flex justify-center">
                <Tag text={post.tags} />
              </div>
              <h3 className="font-extrabold uppercase text-tertiary text-center">
                {post.title}
              </h3>
              <div className="flex gap-3 mt-2 justify-center">
                <span className="font-light">By: {post.authorName}</span>
                <span className="font-light italic">
                  By: {post.publishDate}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
