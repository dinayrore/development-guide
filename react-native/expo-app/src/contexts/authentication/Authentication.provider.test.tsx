import React, { useContext } from "react";
import { AuthenticationContext } from "./Authentication.context";
import { renderHook } from "@testing-library/react-native";
import { DEFAULT_AUTHENTICATION_CONTEXT_VALUE } from "services/data/fixtures";

describe("Authentication Provider", () => {
  it("has a default value", () => {
    const { result } = renderHook(() => useContext(AuthenticationContext));
    expect(result.current).toBe(DEFAULT_AUTHENTICATION_CONTEXT_VALUE);
  });
});
