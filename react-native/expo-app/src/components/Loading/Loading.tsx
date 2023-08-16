import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./Loading.styles";
import { theme } from "theme/theme";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.ultraViolet} />
    </View>
  );
};

export default Loading;
