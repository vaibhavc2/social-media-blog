export interface User {
  name: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<User, "name">;
