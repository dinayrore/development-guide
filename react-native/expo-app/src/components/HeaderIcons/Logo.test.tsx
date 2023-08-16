import React from "react";
import Logo from "./Logo";
import { render } from "@testing-library/react-native";

describe("<Logo />", () => {
  it("renders the application Logo", () => {
    const { getByTestId } = render(<Logo />);
    expect(getByTestId("logo")).toBeVisible();
  });
});
