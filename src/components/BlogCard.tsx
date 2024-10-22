import Link from "next/link";
import Image from "next/image";

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  readingTime: number;
  author: string;
  $createdAt: string;
  imageUrl: string;
}

export default function BlogCard(
  { title, slug, excerpt, readingTime, author, $createdAt, imageUrl }: BlogCardProps
) {

  const publishDate = new Date($createdAt).toDateString();

  return (
    <Card className="overflow-hidden">
        <Link href={`/blog/${slug}`}>
          <Image src={imageUrl} width={300} height={200} alt="blog image" className="w-full aspect-video"/>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Reading Time: {readingTime} minutes</p>
          <p>Author: {author}</p>
          <p>Published on: {publishDate}</p>
        </CardContent>
        <CardFooter>
          <a href={`/blog/${slug}`}>Read More</a>
        </CardFooter>
    </Link>
      </Card>
  )
}