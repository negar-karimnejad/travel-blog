import prisma from "@/app/utils/db";
import Tag from "@/components/ui/Tag";
import Image from "next/image";
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "../../../utils/formatDate";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

async function getData(id: string) {
  const data = await prisma.blog.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return data;
}

export default async function SingleBlog({ params }: { params: PostTypes }) {
  const { id } = params;
  const post = await getData(id);

  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[400px] relative mb-5">
        <Image
          src={post?.img as string}
          fill
          alt={`Image for blog`}
          className="object-cover"
        />
      </div>

      <Tag text={post?.category || ""} />

      <h2 className="font-extrabold text-4xl uppercase text-tertiary my-3">
        {post?.title}
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
            {post?.desc}
            {post?.desc}
            {post?.desc}
            {post?.desc}
            {post?.desc}
            {post?.desc}
            {post?.desc}
          </p>
          <div className="mt-5 gap-5 items-center flex">
            <Image
              src={post?.user?.image as string}
              alt={`Image for ${post?.user?.name}`}
              width={500}
              height={500}
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex gap-1 flex-col">
              <span>{post?.user?.name}</span>
              <span>{formatDate(post?.createdAt.toString() || "")}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
