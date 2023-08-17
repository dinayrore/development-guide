import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import React, { useState, ReactNode, useMemo, useCallback } from "react";
import { AuthenticationContext } from "./Authentication.context";
import {
  emailValidator,
  authenticator,
  nameValidator,
  passwordValidator,
  constructErrorMessage,
} from "services/authentication/authentication.service";
import useToastMessage from "hooks/useToastMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
import { User } from "services/data/types";
import { ToastMessageText } from "components/ToastMessage/constants";

interface AuthenticationProviderProps {
  children: ReactNode;
}

const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, _setIsLoading] = useState<boolean>(false);

  const { showNavi } = useToastMessage();
  // const navigation = useNavigation<>();

  const onLogin = useCallback(async () => {
    const {
      emailMessage,
      passwordMessage,
      authenticatedUser,
      getAuthenticatedUser,
    } = await authenticator(email, password);

    if (getAuthenticatedUser === null) {
      showNavi(ToastMessageText.userNotFound);
    }

    if (!emailMessage && !passwordMessage) {
      setUser(authenticatedUser);
      // where do we want the user to go after login?
      // navigation.navigate();
      return;
    } else {
      const toastMessage = constructErrorMessage(emailMessage, passwordMessage);
      showNavi(toastMessage);
    }
  }, [email, password, showNavi]);

  const onRegister = useCallback(
    (userName: string, userEmail: string, userPassword: string) => {
      const nameMessage = nameValidator(userName);
      const emailMessage = emailValidator(userEmail, email);
      const passwordMessage = passwordValidator(userPassword, password);

      if (!nameMessage && !emailMessage && !passwordMessage) {
        const registeredUser: User = {
          id: uuidv4(),
          name,
          email,
          password,
        };
        setUser(registeredUser);
        AsyncStorage.setItem(
          "@AuthenticatedUser",
          JSON.stringify(registeredUser),
        );
        // where do we want the user to go after registration?
        // navigation.navigate();
      } else {
        const message = `${nameMessage}\n${emailMessage}\n${passwordMessage} `;
        const toastMessage = message.replace(`${undefined}\n`, "");
        showNavi(toastMessage);
      }
    },
    [email, password, showNavi, name],
  );

  const onLogout = useCallback(() => {
    setUser(null);
    // where do we want the user to go after logout?
    // navigation.navigate();
  }, []);

  const provider = useMemo(() => {
    return {
      isAuthenticated: !!user,
      user,
      isLoading,
      onLogin,
      onLogout,
      onRegister,
      email,
      setEmail,
      password,
      setPassword,
      name,
      setName,
    };
  }, [user, isLoading, email, password, name, onLogin, onLogout, onRegister]);

  return (
    <AuthenticationContext.Provider value={provider}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
