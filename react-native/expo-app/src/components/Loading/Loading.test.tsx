import React from "react";
import { render } from "@testing-library/react-native";
import Loading from "./Loading";

describe("<Loading />", () => {
  it("renders a ActivityIndicator when the application isLoading", () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId("activity-indicator")).toBeVisible();
  });
});
