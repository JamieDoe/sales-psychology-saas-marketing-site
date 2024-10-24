import Image from 'next/image';
import { Query } from 'node-appwrite';

import { MarkdownParser } from '@/components';

import databaseConnection from '@/lib/database';
import { BlogPostProps } from '@/lib/types';

type Params = {
  params: {
    slug: string;
  };
};

interface Documents {
  total: number;
  documents: BlogPostProps[];
}

export default async function Blog({ params }: Params) {
  const { slug } = params;
  const { database } = await databaseConnection();
  const blog = await database.blogs
    .list([Query.equal('slug', slug)])
    .then((res: Documents) => res.documents[0]);

  const { title, author, imageUrl, content, $createdAt } = blog;

  const date = new Date($createdAt);

  const pubDateTime = `${date.toLocaleDateString([], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })} - ${date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })}`;

  return (
    <div className="px-4">
      <article className="max-w-screen-lg mx-auto">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold duration-300">
          {blog.title}
        </h1>
        <time className="block text-center text-sm text-gray-600 mt-2">
          {pubDateTime}
        </time>
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="max-w-screen-sm mx-auto">
          <MarkdownParser content={content} />
        </div>
      </article>
    </div>
  );
}
