import React from "react";
import { renderWrapper } from "jest/helpers";
import RegistrationScreen from "./registration.screen";
import { navigationProps } from "jest/constants";
import { RegistrationScreenTestIds, RegistrationScreenText } from "./constants";

describe("<RegistrationScreen />", () => {
  it("renders the RegistrationScreen", () => {
    const { getByTestId, getByLabelText, getByPlaceholderText } = renderWrapper(
      <RegistrationScreen {...navigationProps} />,
    );

    expect(getByTestId(RegistrationScreenTestIds.image)).toBeVisible();
    expect(getByLabelText(RegistrationScreenText.titleLabel)).toBeVisible();
    expect(
      getByPlaceholderText(RegistrationScreenText.namePlaceholder),
    ).toBeVisible();
    expect(
      getByPlaceholderText(RegistrationScreenText.emailPlaceholder),
    ).toBeVisible();
    expect(
      getByPlaceholderText(RegistrationScreenText.passwordPlaceholder),
    ).toBeVisible();

    expect(
      getByLabelText(RegistrationScreenText.signUpButtonLabel),
    ).toBeVisible();
  });
});
