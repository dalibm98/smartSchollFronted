import { Role, } from "./role-enum";

export interface User {

        id: number;
  nom: string;
  email: string;
  password: string;
  role?: Role;
}
