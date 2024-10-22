interface BlogPostProps {
  title: string
  slug: string
  content: string
  excerpt: string
  imageUrl: string
  readingTime: number;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  author: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: any[];
  $databaseId: string;
  $collectionId: string;
}

interface AdminLoginProps {
  email: string
  password: string
}

export { type BlogPostProps, type AdminLoginProps };