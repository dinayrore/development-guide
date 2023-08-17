import { User } from "./types";

export const TEST_IS_AUTHENTICATED = true;

export const TEST_USER: User = {
  id: "#1-princess-hyrule",
  name: "Princess Zelda",
  email: "zelda@hyrule.com",
  password: "SUPERsecretP@ssw0rd",
};

export const DEFAULT_AUTHENTICATION_CONTEXT_VALUE = {
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
};
