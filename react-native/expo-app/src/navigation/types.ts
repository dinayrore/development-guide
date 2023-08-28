/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackRouteNames } from "./constants";

export type RootStackParamList = {
  [RootStackRouteNames.Drawer]: undefined;
  [RootStackRouteNames.LoginScreenName]: undefined;
  [RootStackRouteNames.RegisterScreenName]: undefined;
  [RootStackRouteNames.HomeScreenName]: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// Stack Screen Prop Types for navigation
export type LoginScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.LoginScreenName
>;

export type RegisterScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.RegisterScreenName
>;

// Stack Screen Navigation Prop Types for useNavigation
export type LoginNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  RootStackRouteNames.LoginScreenName
>;
