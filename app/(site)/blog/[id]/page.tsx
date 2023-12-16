import BlogCard from "@/components/shared/BlogCard";

interface searchParamsType {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost: boolean;
  tags: string;
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
      <BlogCard/>
  );
}
