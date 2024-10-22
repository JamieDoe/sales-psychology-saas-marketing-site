import { Client, Account, Databases } from "node-appwrite";
import { cookies } from "next/headers";

// Constants
const ENDPOINT = process.env.NEXT_APPWRITE_ENDPOINT!;
const PROJECT = process.env.NEXT_APPWRITE_PROJECT_ID!;
const SECRET = process.env.NEXT_APPWRITE_SECRET_KEY!;
const DATABASE_ID = process.env.NEXT_APPWRITE_DATABASE_ID!;
const COLLECTION_ID_BLOGS = process.env.NEXT_APPWRITE_COLLECTION_ID_BLOGS!;

// Appwrite client
const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT).setKey(SECRET)

async function createSessionClient() {
  const session = cookies().get("auth-session");
  if (!session || !session.value) {
    throw new Error("No session cookie found, please login first");
  }
  client.setSession(session.value);
  return {
    get account() {
      return new Account(client);
    },
  };
}

async function createAdminClient() {
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
};
