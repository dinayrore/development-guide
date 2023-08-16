import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import { AuthenticationContext } from "contexts/authentication/Authentication.context";
import {
  TEST_AUTHENTICATION_CONTEXT_NULL_USER,
  TEST_AUTHENTICATION_CONTEXT_USER,
  TEST_USER,
  navigationProps,
} from "./constants";
import AuthenticationProvider from "contexts/authentication/Authentication.provider";
import { RegistrationScreenText } from "screens/registration/constants";
import RegistrationScreen from "screens/registration/registration.screen";

/**
 * Helper function for unit testing components that require context providers
 * @param component - The JSX component to be rendered
 * @param isAuthenticated - boolean; by default is false
 * @param isEmptyCart - boolean; by default is true
 * @returns
 */
export const renderWrapper = (
  component: JSX.Element,
  isAuthenticated: boolean = false,
  isEmptyCart: boolean = true,
) => {
  const renderComponent = render(
    <NavigationContainer>
      <AuthenticationContext.Provider
        value={
          isAuthenticated
            ? TEST_AUTHENTICATION_CONTEXT_USER
            : TEST_AUTHENTICATION_CONTEXT_NULL_USER
        }
      >
        {component}
      </AuthenticationContext.Provider>
    </NavigationContainer>,
  );
  return {
    ...renderComponent,
  };
};

/**
 * Helper function for setting up the LoginScreen's TextInput components
 * in order to properly test the Login Screen.
 * @param email TEST_USER.email
 * @param password TEST_USER.password
 */
export const mockRegistration = () => {
  const { getByPlaceholderText, getByLabelText } = render(
    <RegistrationScreen {...navigationProps} />,
    { wrapper: AuthenticationProvider },
  );
  const nameInput = getByPlaceholderText(
    RegistrationScreenText.namePlaceholder,
  );
  fireEvent.changeText(nameInput, TEST_USER.name);

  const emailInput = getByPlaceholderText(
    RegistrationScreenText.emailPlaceholder,
  );
  fireEvent.changeText(emailInput, TEST_USER.email);

  const passwordInput = getByPlaceholderText(
    RegistrationScreenText.passwordPlaceholder,
  );
  fireEvent.changeText(passwordInput, TEST_USER.password);

  fireEvent.press(getByLabelText(RegistrationScreenText.signUpButtonLabel));
};
