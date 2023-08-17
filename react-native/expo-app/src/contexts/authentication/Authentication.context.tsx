import { createContext } from "react";
import { AuthenticationContextType } from "./types";
import { DEFAULT_AUTHENTICATION_CONTEXT_VALUE } from "services/data/fixtures";

export const AuthenticationContext = createContext<AuthenticationContextType>(
  DEFAULT_AUTHENTICATION_CONTEXT_VALUE,
);
