import useAuth from "hooks/useAuth";
import React from "react";
import { SafeAreaView, TextInput, View, Text } from "react-native";
import { globalStyles } from "theme/global.styles";
import { theme } from "theme/theme";
import { styles } from "./registration.styles";
import { ButtonText } from "components/Button/constants";
import Button from "components/Button/Button";
import { RegistrationScreenText } from "./constants";

const RegistrationScreen = () => {
  const { email, setEmail, password, setPassword, name, setName, onRegister } =
    useAuth();
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <Text
          style={styles.title}
          accessibilityLabel={RegistrationScreenText.titleLabel}
        >
          {RegistrationScreenText.title}
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          placeholderTextColor={theme.colors.black}
          selectionColor={theme.colors.platinum}
          value={name}
          textContentType="name"
          autoCapitalize="none"
          onChangeText={(n) => setName(n)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={theme.colors.black}
          selectionColor={theme.colors.platinum}
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={theme.colors.black}
          selectionColor={theme.colors.platinum}
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />

        <Button
          buttonStyle={styles.buttonStyle}
          buttonText={ButtonText.signUp}
          onPress={() => onRegister(name, email, password)}
          disabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
