import "react-native-get-random-values";
// 🪄 import { v4 as uuidv4 } from "uuid";
import React, { ReactNode } from "react";
import { AuthenticationContext } from "./Authentication.context";

interface AuthenticationProviderProps {
  children: ReactNode;
}

const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  // ❓ What do we need to store in state?
  // 🪄 const [isLoading, _setIsLoading] = useState<boolean>(false);

  const onLogin = () => {
    // ❓ How does Login work? What do we need to do to authenticate a user?
    // ❓ If the user is not authenticated, what do we need to do?
    // ❓ If the user is authenticated, what do we need to do?
  };

  // ❓ What do we need in order to register a user?
  // ❗️ The User type defined here may hold a clue: react-native/expo-app/src/services/data/types.ts
  const onRegister = () => {
    // ❓ If a user does not provide all of the necessary information, what happens?
    // ❓ If a user provides all of the necessary information, what happens?
  };

  const onLogout = () => {
    // ❓ What happens on Logout?
    // ❓ Do we need to worry about error handling here?
  };

  const provider = () => {
    return {};
  };

  return (
    <AuthenticationContext.Provider value={provider}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
