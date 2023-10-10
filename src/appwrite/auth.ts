import { config } from "../config";
import { Client, Account, ID } from "appwrite";
import { User, UserLogin } from "../types";

const { appwriteUrl, appwriteProjectId } = config;

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(appwriteUrl).setProject(appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }: User) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method: for login
        return this.login({ email, password });
      } else return userAccount;
    } catch (error) {
      console.log("Appwrite service :: userAccount :: ERROR ::", error);
      return false;
      // throw error;
    }
  }

  async login({ email, password }: UserLogin) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite service :: login :: ERROR ::", error);
      return false;
      // throw error;
    }

    // return null;
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: ERROR ::", error);
      return false;
      // throw error;
    }

    // return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: ERROR ::", error);
      return false;
      // throw error;
    }

    return null;
  }
}

const authService = new AuthService();

export default authService;
