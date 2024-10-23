import { ID } from 'node-appwrite';
import {
  databases,
  DATABASE_ID,
  COLLECTION_ID_BLOGS,
  COLLECTION_ID_USERS,
} from './appwrite';

type Collection = {
  name: string;
  collectionId: string;
};

type DatabaseMethods = {
  list: (query?: string[]) => Promise<any>;
  create: (data: object) => Promise<any>;
  get: (documentId: string) => Promise<any>;
  update: (documentId: string, data: any) => Promise<any>;
  delete: (documentId: string) => Promise<any>;
};

type Database = {
  [key: string]: DatabaseMethods;
};

const collections: Collection[] = [
  {
    name: 'blogs',
    collectionId: COLLECTION_ID_BLOGS,
  },
  {
    name: 'users',
    collectionId: COLLECTION_ID_USERS,
  },
];

const database: Database = {};

collections.forEach((collection) => {
  database[collection.name] = {
    async list(query?: string[]) {
      return databases.listDocuments(
        DATABASE_ID,
        collection.collectionId,
        query,
      );
    },
    async create(data: object) {
      return databases.createDocument(
        DATABASE_ID,
        collection.collectionId,
        ID.unique(),
        data,
      );
    },
    async get(documentId: string) {
      return databases.getDocument(
        DATABASE_ID,
        collection.collectionId,
        documentId,
      );
    },
    async update(documentId: string, data: object) {
      return databases.updateDocument(
        DATABASE_ID,
        collection.collectionId,
        documentId,
        data,
      );
    },
    async delete(documentId: string) {
      return databases.deleteDocument(
        DATABASE_ID,
        collection.collectionId,
        documentId,
      );
    },
  };
});

export { database };
