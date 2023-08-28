import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).heading,
    marginVertical: theme.spacing.sm,
  },
});
