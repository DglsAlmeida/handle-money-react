import { useContext } from "react";
import { AuthProviderProps } from "./interfaces";
import { AuthContext } from "./useAuthContext";

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const signIn = (email: string, password: string) => {
  
  }

  const signUp = (email: string, user: string, password: string) => {
  
  }

  const signOut = () => {
    
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signUp,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);