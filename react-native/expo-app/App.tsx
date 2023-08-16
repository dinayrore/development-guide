import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { toastConfig } from "components/ToastMessage/Toast.config";
import Router from "navigation/router";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <StatusBar />
      <Toast position="bottom" bottomOffset={80} config={toastConfig} />
    </SafeAreaProvider>
  );
}
