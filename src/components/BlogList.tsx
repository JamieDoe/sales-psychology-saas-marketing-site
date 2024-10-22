import { BlogPostProps } from "@/lib/types";
import BlogCard from "./BlogCard";

interface BlogListProps {
  blogs: any[];
}

export default async function BlogList({ blogs }: BlogListProps) {
  console.log(blogs);
  return (
    <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog: BlogPostProps) => (
        <BlogCard key={blog.$id} {...blog} />
      ))}
    </div>
  )
}