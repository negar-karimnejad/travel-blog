import { blogData } from "@/constants/blogData";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";
import Link from "next/link";

export default function Hero() {
  const featuredPosts = blogData.filter((item) => item.featured);
  const topFeatured = featuredPosts.slice(0, 1);
  const bottomFeatured = featuredPosts.slice(1, 4);

  return (
    <section className="relative">
      <div className="w-[95%] mx-auto max-w-[1450px] z-1">
        {topFeatured.map((post) => (
          <article
            key={post.id}
            className="flex flex-col gap-5 mb-5 text-center relative"
          >
            <Tag text={post.tags} />
            <h2 className="font-extrabold text-6xl uppercase text-tertiary">
              {post.title}
            </h2>
            <div className="flex items-center justify-center gap-3 font-light text-tertiary">
              <div className="bg-black w-10 h-10 rounded-full"></div>
              <span>{post.authorName}</span>
              <span className="italic">{post.publishDate}</span>
            </div>
            <Link
              href={{
                pathname: `blog/${post.id}`,
                query: { ...post },
              }}
            >
              <div className="max-h-[600px] relative overflow-hidden shadow-xl">
                <img
                  src={post.image_path}
                  alt={`Image for ${post.title}`}
                  className="object-cover w-full h-full"
                />
                <Overlay />
              </div>
            </Link>
          </article>
        ))}
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8">
          {bottomFeatured.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-3 text-center relative"
            >
              <Link
                href={{
                  pathname: `blog/${post.id}`,
                  query: { ...post },
                }}
              >
                <div className="h-72 relative overflow-hidden w-full shadow-xl">
                  <img
                    src={post.image_path}
                    alt={`Image for ${post.title}`}
                    className="object-cover w-full h-full"
                  />
                  <Overlay />
                </div>
              </Link>
              <Tag text={post.tags} />
              <h3 className="text-sm font-extrabold uppercase text-tertiary px-5">
                {post.title}
              </h3>
              <span className="italic font-light">{post.publishDate}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
