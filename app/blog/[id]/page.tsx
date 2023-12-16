import Tag from "@/components/ui/Tag";
import Image from "next/image";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

interface searchParamsType {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost: boolean;
  tags: string[];
  authorImage: string;
  authorName: string;
  publishDate: string;
}

export default function SingleBlog({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[400px] relative mb-5">
        <Image
          src={searchParams.image_path}
          fill
          alt={`Image for blog`}
          className="object-cover"
        />
      </div>

      <Tag text={searchParams.tags} />

      <h2 className="font-extrabold text-4xl uppercase text-tertiary my-3">
        {searchParams.title}
      </h2>
      <div className="flex gap-5 relative md:gap-20 mt-10 md:flex-row flex-col">
        <aside className="md:sticky md:top-3/4 md:h-screen">
          <span className="font-extrabold text-tertiary uppercase text-2xl">
            share:
          </span>
          <div className="flex text-3xl gap-5 text-gray-400 mt-2 [&>*]:border">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
        </aside>
        <article>
          <p className="textxl">
            {searchParams.paragraph}
            {searchParams.paragraph}
            {searchParams.paragraph}
            {searchParams.paragraph}
            {searchParams.paragraph}
            {searchParams.paragraph}
            {searchParams.paragraph}
          </p>
          <div className="mt-5 gap-5 items-center flex">
            <Image
              src={searchParams.authorImage}
              alt={`Image for ${searchParams.authorName}`}
              width={500}
              height={500}
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex gap-1 flex-col">
              <span>{searchParams.authorName}</span>
              <span>{searchParams.publishDate}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
