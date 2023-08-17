import { createContext } from "react";
import { AuthenticationContextType } from "./types";

export const AuthenticationContext = createContext<AuthenticationContextType>({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  onLogin: () => {},
  onLogout: () => {},
  onRegister: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  name: "",
  setName: () => {},
});
