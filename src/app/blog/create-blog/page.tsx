import { NewBlogForm } from '@/components';

export default function CreateBlog() {
  return (
    <div className="mx-auto max-w-screen-sm px-4 space-y-16">
      <h1 className="mt-10">Create Blog</h1>
      <NewBlogForm />
    </div>
  );
}
