'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  Button,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Input,
  Textarea,
  TagInput,
} from '@/components';
import { createBlog } from '@/lib/actions/createBlog';
import { newBlogSchema } from '@/lib/formSchemas';

export default function NewBlogForm() {
  const form = useForm<z.infer<typeof newBlogSchema>>({
    resolver: zodResolver(newBlogSchema),
    defaultValues: {
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      author: '',
      readingTime: 0,
      metaTitle: '',
      metaDescription: '',
      metaKeywords: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof newBlogSchema>) => {
    const response = await createBlog(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-lg font-bold">Blog Detials</h2>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormDescription>
                Enter a title for the blog. This will be displayed as the main
                heading.
              </FormDescription>
              <FormControl>
                <Input placeholder="Enter a title for the blog" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormDescription>
                Enter a slug for the blog. This will be used in the URL.
              </FormDescription>
              <FormControl>
                <Input placeholder="Enter a slug for the blog" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormDescription>
                <span className="font-bold">Allows for markdown content.</span>{' '}
                This will be displayed as the main blog
              </FormDescription>
              <FormControl>
                <Textarea
                  className="min-h-56"
                  placeholder="Enter the content for the blog"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormDescription>
                Enter an excerpt for the blog. This will be displayed as a
                preview.
              </FormDescription>
              <FormControl>
                <Textarea
                  placeholder="Enter an excerpt for the blog"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormDescription>
                Enter the image URL for the blog. This will be displayed as the
                main and preview image.
              </FormDescription>
              <FormControl>
                <Textarea
                  placeholder="
                  Enter the image URL for the blog
                "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormDescription>
                Enter the author of the blog. This will be displayed as the
                author.
              </FormDescription>
              <FormControl>
                <Input placeholder="Enter the author of the blog" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="readingTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time to Read</FormLabel>
              <FormDescription>
                Enter the time to read for the blog. This will be displayed as
                the time to read.
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="Enter the time to read for the blog"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h2 className="text-lg font-bold">Blog SEO</h2>
        <FormField
          control={form.control}
          name="metaTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meta Title</FormLabel>
              <FormDescription>
                Enter the meta title for the blog. This will be displayed as the
                title in search engines.
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="Enter the meta title for the blog"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="metaDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meta Description</FormLabel>
              <FormDescription>
                Enter the meta description for the blog. This will be displayed
                as the description in search engines.
              </FormDescription>
              <FormControl>
                <Textarea
                  placeholder="Enter the meta description for the blog"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="metaKeywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meta Keywords</FormLabel>
              <FormDescription>
                Enter the keywords for the blog. This will be used for SEO.
              </FormDescription>
              <FormControl>
                <TagInput
                  name={field.name}
                  control={form.control}
                  defaultValue={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Blog</Button>
      </form>
    </Form>
  );
}
