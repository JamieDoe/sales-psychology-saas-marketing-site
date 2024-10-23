'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { database } from '../database';
import { newBlogSchema } from '../formSchemas';

export async function createBlog(formData: z.infer<typeof newBlogSchema>) {
  formData.readingTime;
  try {
    const response = await database.blogs.create(formData);

    if (!response.$id) {
      throw new Error('Failed to create blog');
    }
  } catch (error) {
    console.error('Failed to create blog', error);
  }

  revalidatePath('/blog');
  return redirect('/blog');
}
