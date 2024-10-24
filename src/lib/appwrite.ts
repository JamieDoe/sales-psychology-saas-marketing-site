import { Client, Account, Databases } from 'node-appwrite';

// Constants
const ENDPOINT = process.env.NEXT_APPWRITE_ENDPOINT!;
const PROJECT = process.env.NEXT_APPWRITE_PROJECT_ID!;
const SECRET = process.env.NEXT_APPWRITE_SECRET_KEY!;
const DATABASE_ID = process.env.NEXT_APPWRITE_DATABASE_ID!;
const COLLECTION_ID_BLOGS = process.env.NEXT_APPWRITE_COLLECTION_ID_BLOGS!;
const COLLECTION_ID_USERS = process.env.NEXT_APPWRITE_COLLECTION_ID_USERS!;

// Appwrite client
const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT);

async function createSessionClient(sessionValue: string) {
  client.setSession(sessionValue);
  return {
    get account() {
      return new Account(client);
    },
  };
}

async function createAdminClient() {
  client.setKey(SECRET);
  return {
    get account() {
      return new Account(client);
    },
  };
}

const databases = new Databases(client);

export {
  createSessionClient,
  createAdminClient,
  databases,
  client,
  COLLECTION_ID_BLOGS,
  DATABASE_ID,
  COLLECTION_ID_USERS,
};
