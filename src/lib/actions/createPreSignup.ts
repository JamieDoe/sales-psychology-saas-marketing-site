'use server';

import { z } from 'zod';

import { database } from '../database';
import { signupSchema } from '../formSchemas';

export default async function createPreSignup(
  data: z.infer<typeof signupSchema>,
) {
  const { email, firstName } = data;

  try {
    const resposne = await database.users.create({
      email,
      firstName,
    });

    return { success: true };
  } catch (error) {
    return { error: `Failed to add ${firstName} to pre-signup list.` };
  }
}
