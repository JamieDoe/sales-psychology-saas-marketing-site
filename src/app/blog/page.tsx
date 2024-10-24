import { BlogList } from '@/components';
import databaseConnection from '@/lib/database';

export default async function Blog() {
  const { database } = await databaseConnection();
  const blogs = await database.blogs.list().then((res) => res.documents);

  return (
    <div>
      <h1 className="text-3xl font-bold">Explore Blogs</h1>
      <BlogList blogs={blogs} />
    </div>
  );
}
