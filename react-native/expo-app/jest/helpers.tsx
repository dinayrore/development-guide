import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { AuthenticationContext } from "contexts/authentication/Authentication.context";
import {
  TEST_AUTHENTICATION_CONTEXT_NULL_USER,
  TEST_AUTHENTICATION_CONTEXT_USER,
} from "./constants";

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
