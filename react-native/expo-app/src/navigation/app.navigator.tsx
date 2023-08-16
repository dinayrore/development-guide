import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerOptions } from "./header-options";
import { RootStackParamList } from "./types";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackRouteNames } from "./constants";
import MenuDrawer from "components/MenuDrawer/MenuDrawer";
import useAuth from "hooks/useAuth";
import LoginScreen from "screens/login/login.screen";
import RegistrationScreen from "screens/registration/registration.screen";

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Drawer.Navigator
      drawerContent={() => <MenuDrawer />}
      initialRouteName={RootStackRouteNames.LoginScreenName}
      screenOptions={headerOptions()}
    >
      {/* Screens */}
      <Stack.Group>
        <Stack.Screen
          name={RootStackRouteNames.RegisterScreenName}
          component={RegistrationScreen}
        />
        <Stack.Screen
          name={RootStackRouteNames.LoginScreenName}
          component={LoginScreen}
        />

        {isAuthenticated && (
          <Stack.Group>
            {/* <Stack.Screen
              name={RootStackRouteNames.ShoppingCartScreenName}
              component={}
            /> */}
          </Stack.Group>
        )}
      </Stack.Group>
    </Drawer.Navigator>
  );
};

export default AppNavigator;
