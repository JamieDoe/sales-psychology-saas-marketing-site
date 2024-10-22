import { BlogList } from "@/components";
import { database } from "@/lib/database";

export default async function Blog() {
  const blogs = (await database.blogs.list()).documents;


  return (
    <div>
      <h1 className="text-3xl font-bold">Explore Blogs</h1>
      <BlogList blogs={blogs} />
    </div>
  );
}
