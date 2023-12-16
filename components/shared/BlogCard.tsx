import Image from "next/image";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";

export default function BlogCard(post) {
  return (
    <article className="relative rounded-lg overflow-hidden">
      <div className="w-[1000px] h-[450px] relative">
        <Image
          src={post.image_path}
          fill
          alt={`Image for ${post.title}`}
          className="object-cover"
        />
        <Overlay />
      </div>
      <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-between">
        <div>
          <Tag text={post.tags} />
          <h3 className="text-3xl font-extrabold uppercase text-white">
            {post.title}
          </h3>
        </div>
      </div>
    </article>
  );
}
