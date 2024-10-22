import { database } from "@/lib/database";
import { Query } from "node-appwrite";

type Params = {
  params: {
    slug: string;
  };
};

interface Blog {
  title: string;
  slug: string;
}

interface Documents {
  total: number;
  documents: Blog[];
}

export default async function Blog({ params }: Params) {
  const { slug } = params;

  const blog = await database.blogs
    .list([Query.equal("slug", slug)])
    .then((res: Documents) => res.documents[0]);

  console.log(blog);
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.slug}</p>
    </div>
  );
}
