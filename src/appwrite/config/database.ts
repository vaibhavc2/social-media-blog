import { config } from "../../config";
import { Client, Databases, Query } from "appwrite";
import { Post, UpdatePost } from "../../types";

const {
  appwriteUrl,
  appwriteProjectId,
  appwriteDatabaseId,
  appwriteCollectionId
} = config;

class DatabaseService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(appwriteUrl).setProject(appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId
  }: Post) {
    try {
      return await this.databases.createDocument(
        appwriteDatabaseId,
        appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      );
    } catch (error) {
      console.log("Database Service :: createPost :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  async updatePost(
    slug: string,
    { title, content, featuredImage, status }: UpdatePost
  ) {
    try {
      return await this.databases.updateDocument(
        appwriteDatabaseId,
        appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Database Service :: updatePost :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  async deletePost(slug: string) {
    try {
      await this.databases.deleteDocument(
        appwriteDatabaseId,
        appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Database Service :: deletePost :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  async getPost(slug: string) {
    try {
      return await this.databases.getDocument(
        appwriteDatabaseId,
        appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Database Service :: getPost :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  async getPosts(queries: string[] = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        appwriteDatabaseId,
        appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Database Service :: getPosts :: ERROR ::", error);
      return false;
      // throw error;
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
