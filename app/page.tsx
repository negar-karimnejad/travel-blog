import Hero from "@/components/shared/Hero";
import LatestPosts from "@/components/shared/LatestPosts";
import TopPosts from "@/components/shared/TopPosts";
import prisma from "./utils/db";

export default async function Home() {
  const posts = await prisma.blog.findMany({
    include: {
      user: true,
    },
  });

  return (
    <>
      <Hero posts={posts} />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
        <LatestPosts posts={posts} />
        <TopPosts posts={posts} />
      </div>
    </>
  );
}
