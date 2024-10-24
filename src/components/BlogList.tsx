import { BlogPostProps } from '@/lib/types';
import BlogCard from './BlogCard';

interface BlogListProps {
  blogs: BlogPostProps[];
}

export default async function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog: BlogPostProps) => (
        <BlogCard
          key={blog.$id}
          title={blog.title}
          slug={blog.slug}
          excerpt={blog.excerpt}
          readingTime={blog.readingTime}
          author={blog.author}
          pubDate={new Date(blog.$createdAt).toLocaleDateString()}
          imageUrl={blog.imageUrl}
        />
      ))}
    </div>
  );
}
