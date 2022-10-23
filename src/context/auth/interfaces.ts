import { ReactNode } from "react";

export type User = {
  name: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface IAuthContext {
  signIn: (email: string, password: string) => void;
  signUp: (email: string, user: string, password: string) => void;
  signOut: () => void;
}