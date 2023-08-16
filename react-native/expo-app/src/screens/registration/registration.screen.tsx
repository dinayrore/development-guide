import React from "react";
import { SafeAreaView, View } from "react-native";
// import useAuth from "hooks/useAuth";
// import Button from "components/Button/Button";
// import { ButtonText } from "components/Button/constants";
// import { RegistrationScreenText } from "./constants";
import { styles } from "./registration.styles";
import { globalStyles } from "theme/global.styles";
// import { theme } from "theme/theme";

const RegistrationScreen = () => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        {/* 🧩 Text */}
        {/* 🧩 TextInput  */}
        {/* 🧩 Button  */}
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
