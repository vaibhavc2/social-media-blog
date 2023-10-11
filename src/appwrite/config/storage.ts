import { config } from "../../config";
import { Client, ID, Storage } from "appwrite";

const { appwriteUrl, appwriteProjectId, appwriteBucketId } = config;

class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client.setEndpoint(appwriteUrl).setProject(appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file: File) {
    try {
      return await this.storage.createFile(appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("Storage Service :: uploadFile :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  async deleteFile(fileId: string) {
    try {
      await this.storage.deleteFile(appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Storage Service :: deleteFile :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  getFilePreview(fileId: string) {
    try {
      return this.storage.getFilePreview(appwriteBucketId, fileId);
    } catch (error) {
      console.log("Storage Service :: getFilePreview :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  downloadFile(fileId: string) {
    try {
      return this.storage.getFileDownload(appwriteBucketId, fileId);
    } catch (error) {
      console.log("Storage Service :: downloadFile :: ERROR ::", error);
      return false;
      // throw error;
    }
  }
}

const storageService = new StorageService();

export default storageService;
