import { ID } from "node-appwrite";
import { databases, DATABASE_ID, COLLECTION_ID_BLOGS } from "./appwrite";

const database = {
  blogs: {
    async list(query?: string[]) {
      return databases.listDocuments(DATABASE_ID, COLLECTION_ID_BLOGS, query);
    },
    async create(data: any) {
      return databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID_BLOGS,
        ID.unique(),
        data
      );
    },
    async get(documentId: string) {
      return databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID_BLOGS,
        documentId
      );
    },
    async update(documentId: string, data: any) {
      return databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID_BLOGS,
        documentId,
        data
      );
    },
    async delete(documentId: string) {
      return databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID_BLOGS,
        documentId
      );
    },
  },
};

export { database };
