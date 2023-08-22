import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
// 🪄 import useAuth from "hooks/useAuth";
import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import { LoginScreenNavigationProps } from "navigation/types";
import { LoginScreenText } from "./constants";
import { RootStackRouteNames } from "navigation/constants";
import { styles } from "./login.styles";
import { globalStyles } from "theme/global.styles";
// import { theme } from "theme/theme";

const LoginScreen = ({ navigation }: LoginScreenNavigationProps) => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={styles.title}
            accessibilityLabel={LoginScreenText.titleLabel}
          >
            {LoginScreenText.title}
          </Text>

          {/* 🧩 TextInput  */}
          {/* 🔗 https://reactnative.dev/docs/textinput */}

          {/* If you use React Native's Button Component, it will look as shown below */}
          {/* <Button title="Login" color={theme.colors.ultraViolet} /> */}
          <Button
            buttonText={ButtonText.signUp}
            onPress={() =>
              navigation.navigate(RootStackRouteNames.RegisterScreenName)
            }
            disabled={false}
            buttonStyle={styles.signUpButtonStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
