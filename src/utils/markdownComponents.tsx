import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type MarkdownComponentsProps = {
  children?: ReactNode;
  href?: string;
  src?: string;
  alt?: string;
};

const listStyle = 'flex flex-col space-y-2 list-decimal pl-10 py-5';

export const markdownComponents = {
  h1: ({ children }: MarkdownComponentsProps) => <h1>{children}</h1>,
  h2: ({ children }: MarkdownComponentsProps) => <h2>{children}</h2>,
  h3: ({ children }: MarkdownComponentsProps) => <h3>{children}</h3>,
  p: ({ children }: MarkdownComponentsProps) => <p>{children}</p>,
  ul: ({ children }: MarkdownComponentsProps) => (
    <ul className="flex flex-col space-y-2 list-decimal pl-10 py-5">
      {children}
    </ul>
  ),
  ol: ({ children }: MarkdownComponentsProps) => (
    <ol className={listStyle}>{children}</ol>
  ),
  li: ({ children }: MarkdownComponentsProps) => <li>{children}</li>,
  a: ({ children, href = '' }: MarkdownComponentsProps) => (
    <Link href={href} className="text-primary underline">
      {children}
    </Link>
  ),
  blockquote: ({ children }: MarkdownComponentsProps) => (
    <blockquote className="border-l-4 border-primary pl-4">
      {children}
    </blockquote>
  ),
  img: ({ src = '', alt = '' }: MarkdownComponentsProps) => (
    // <div className="relative aspect-video rounded-xl overflow-hidden">
    <Image src={src} alt={alt} width={300} height={200} />
    // </div>
  ),
};
