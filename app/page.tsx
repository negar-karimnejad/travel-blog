import Hero from "@/components/shared/Hero";
import LatestPosts from "@/components/shared/LatestPosts";
import TopPosts from "@/components/shared/TopPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
        <LatestPosts />
        <TopPosts />
      </div>
    </>
  );
}
