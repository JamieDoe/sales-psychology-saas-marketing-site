'use server';

import { cookies } from 'next/headers';
import { createSessionClient } from '../appwrite';

export default async function getLoggedinUser() {
  const session = cookies().get('auth-session');

  if (!session || !session.value) {
    return null;
  }

  try {
    const { account } = await createSessionClient(session.value);
    return await account.get();
  } catch (error) {
    console.error('Error getting logged in user', error);
    return null;
  }
}
