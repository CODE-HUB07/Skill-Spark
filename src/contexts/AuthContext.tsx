
import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signUp: (email: string, password: string, userData: Partial<User>) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  signUp: async () => {},
  signIn: async () => {},
  signOut: async () => {},
  updateProfile: async () => {},
});

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // This is a placeholder for actual Supabase integration
  const signUp = async (email: string, password: string, userData: Partial<User>) => {
    setIsLoading(true);
    try {
      // This will be replaced with Supabase Auth signup
      console.log("Sign up with:", email, password, userData);
      
      // Mock successful signup
      setUser({
        id: "temp-user-id",
        name: userData.name || "New User",
        email,
        isMentor: userData.isMentor || false,
        averageRating: 0,
        sessionCount: 0,
      });
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // This will be replaced with Supabase Auth signin
      console.log("Sign in with:", email, password);
      
      // Mock successful login
      setUser({
        id: "temp-user-id",
        name: "Jane Doe",
        email,
        isMentor: false,
        averageRating: 0,
        sessionCount: 0,
      });
    } catch (error) {
      console.error("Error during signin:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      // This will be replaced with Supabase Auth signout
      console.log("Sign out");
      
      // Clear user
      setUser(null);
    } catch (error) {
      console.error("Error during signout:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (userData: Partial<User>) => {
    setIsLoading(true);
    try {
      // This will be replaced with Supabase profile update
      console.log("Update profile:", userData);
      
      // Mock successful profile update
      if (user) {
        setUser({
          ...user,
          ...userData,
        });
      }
    } catch (error) {
      console.error("Error during profile update:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Value to be provided by the context
  const value = {
    user,
    isLoading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
