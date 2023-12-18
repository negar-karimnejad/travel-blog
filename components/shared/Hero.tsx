import { PostTypes } from "@/types/postTypes";
import { formatDate } from "../../utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";

const Hero: React.FC<{ posts: PostTypes[] }> = ({ posts }) => {
  const featuredPosts = posts.filter((item) => item.featured);
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
            <Tag text={post.category} />
            <h2 className="font-extrabold text-6xl uppercase text-tertiary">
              {post.title}
            </h2>
            <div className="flex items-center justify-center gap-3 font-light text-tertiary">
              {post.user.image && (
                <Image
                  src={post.user.image}
                  width={50}
                  height={50}
                  alt={`Image for ${post.user.name}`}
                  className="rounded-full drop-shadow-lg"
                />
              )}
              <span>{post.user.name}</span>
              <span className="italic">
                {formatDate(post.createdAt.toString())}
              </span>
            </div>
            <Link href={`blog/${post.id}`}>
              <div className="max-h-[600px] relative overflow-hidden shadow-xl">
                <img
                  src={post.img as string}
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
              <Link href={`blog/${post.id}`}>
                <div className="h-72 relative overflow-hidden w-full shadow-xl">
                  <img
                    src={post.img as string}
                    alt={`Image for ${post.title}`}
                    className="object-cover w-full h-full"
                  />
                  <Overlay />
                </div>
              </Link>
              <Tag text={post.category} />
              <h3 className="text-sm font-extrabold uppercase text-tertiary px-5">
                {post.title}
              </h3>
              <span className="italic font-light">
                {formatDate(post.createdAt.toString())}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
