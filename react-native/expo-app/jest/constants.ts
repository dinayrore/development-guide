import { AuthenticationContextType } from "contexts/authentication/types";
import { TEST_USER } from "services/data/fixtures";
import { User } from "services/data/types";

// Mock Drawer dispatch for React Native Navigation
export const mockDispatch = jest.fn();

// Mock React Native Navigation
export const mockNavigation = jest.fn();

// Mock React Native Navigation Route
export const mockRoute = { params: { id: "11" } };

// Mock React Navigation Props
export const navigationProps: any = {
  navigation: {
    navigate: mockNavigation,
    goBack: jest.fn(),
  },
  route: mockRoute,
};

export const mockedNavigationNavigate = navigationProps.navigation;

export const jestSpyOnNavigationNavigate = jest.spyOn(
  mockedNavigationNavigate,
  "navigate",
);

export const TEST_AUTHENTICATION_CONTEXT_NULL_USER: AuthenticationContextType =
  {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    onLogin: jest.fn(),
    onRegister: jest.fn(),
    onLogout: jest.fn(),
    email: "",
    setEmail: jest.fn(),
    password: "",
    setPassword: jest.fn(),
    name: "",
    setName: jest.fn(),
  };

export const TEST_AUTHENTICATION_CONTEXT_USER: AuthenticationContextType = {
  isAuthenticated: true,
  user: TEST_USER,
  isLoading: false,
  onLogin: jest.fn(),
  onRegister: jest.fn(),
  onLogout: jest.fn(),
  email: TEST_USER.email,
  setEmail: jest.fn(),
  password: TEST_USER.password,
  setPassword: jest.fn(),
  name: TEST_USER.name,
  setName: jest.fn(),
};
