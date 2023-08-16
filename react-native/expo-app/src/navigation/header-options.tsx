import React from "react";
import Logo from "components/HeaderIcons/Logo";
import { theme } from "theme/theme";
import MenuIcon from "components/HeaderIcons/MenuIcon";

export const headerOptions = () => ({
  headerStyle: {
    backgroundColor: theme.colors.platinum,
  },
  headerTitle: () => <Logo />,
  headerLeft: () => <MenuIcon />,
});
