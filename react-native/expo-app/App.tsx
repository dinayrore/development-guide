import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Router from "navigation/router";
import Toast from "react-native-toast-message";
import { toastConfig } from "components/ToastMessage/Toast.config";

const App = () => {
  <SafeAreaProvider>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    <StatusBar />
    <Toast position="bottom" bottomOffset={80} config={toastConfig} />
  </SafeAreaProvider>;
};

export default App;
