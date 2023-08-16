import React from "react";
import AuthenticationProvider from "contexts/authentication/Authentication.provider";
import AppNavigator from "./app.navigator";

const Router = () => {
  return (
    <AuthenticationProvider>
      <AppNavigator />
    </AuthenticationProvider>
  );
};

export default Router;
