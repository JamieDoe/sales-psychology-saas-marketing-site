import Link from 'next/link';
import Image from 'next/image';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components';

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  readingTime: number;
  author: string;
  pubDate: string;
  imageUrl: string;
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  readingTime,
  author,
  pubDate,
  imageUrl,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden">
        <Image
          src={imageUrl}
          width={300}
          height={200}
          alt="blog image"
          className="w-full aspect-video"
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Reading Time: {readingTime} minutes</p>
          <p>Author: {author}</p>
          <p>Published on: {pubDate}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
