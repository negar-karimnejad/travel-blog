import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import prisma from "../utils/db";
import BlogCard from "@/components/shared/BlogCard";
import DeletePosts from "@/components/shared/DeletePosts";

async function getData(email: string) {
  const data = await prisma.blog.findMany({
    where: {
      userEmail: email,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
export default async function page() {
  const session = await getServerSession(authOptions);
  const userPosts = await getData(session?.user?.email || "");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {!session?.user ? (
        <h1 className="text-3xl font-extrabold">Sign in to view your post!</h1>
      ) : (
        <div className="max-w-[90%] mx-auto">
          <div className="w-full text-center mb-10">
            <h1 className="text-3xl font-extrabold text-tertiary">
              Hello {session?.user.name}
            </h1>
            <span className="text-lg">
              You have published {userPosts.length} posts
            </span>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
            {userPosts.map((post) => (
              <div key={post.id} className="relative">
                <BlogCard post={post as any} />
                <DeletePosts post={post as any} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
