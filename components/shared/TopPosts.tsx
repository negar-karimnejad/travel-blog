import { PostTypes } from "@/types/postTypes";
import Image from "next/image";
import Link from "next/link";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";

const TopPosts: React.FC<{ posts: PostTypes[] }> = ({ posts }) => {
  const topPosts = posts.filter((item) => item.topPost);

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
          <Link href={`blog/${post.id}`}>
            <article key={post.id}>
              <div className="relative cursor-pointer">
                <Image
                  src={post.img as string}
                  width={800}
                  height={800}
                  alt={`Image for ${post.title}`}
                />
                <Overlay />
              </div>
              <div className="w-full flex justify-center">
                <Tag text={post.category} />
              </div>
              <h3 className="font-extrabold uppercase text-tertiary text-center">
                {post.title}
              </h3>
              <div className="flex gap-3 mt-2 justify-center">
                <span className="font-light">By: {post.user.name}</span>
                {/* <span className="font-light italic">
                  By: {post.createdAt}
                </span> */}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopPosts;
