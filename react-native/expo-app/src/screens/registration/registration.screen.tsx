import React from "react";
import { SafeAreaView, View, Text } from "react-native";
// 🪄 import useAuth from "hooks/useAuth";
import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import { RegistrationScreenText } from "./constants";
import { styles } from "./registration.styles";
import { globalStyles } from "theme/global.styles";
import { RootStackRouteNames } from "navigation/constants";
import { RegisterScreenNavigationProps } from "navigation/types";
import { ScrollView } from "react-native-gesture-handler";
// 🪄 import { theme } from "theme/theme";

const RegistrationScreen = ({ navigation }: RegisterScreenNavigationProps) => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={styles.title}
            accessibilityLabel={RegistrationScreenText.titleLabel}
          >
            {RegistrationScreenText.title}
          </Text>
          {/* 🧩 TextInput  */}
          <Button
            buttonText={ButtonText.signUp}
            onPress={() =>
              navigation.navigate(RootStackRouteNames.RegisterScreenName)
            }
            disabled={false}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
