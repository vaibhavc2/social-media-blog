import { User } from ".";

export interface Auth {
  status: boolean;
  userData: User | null;
}
