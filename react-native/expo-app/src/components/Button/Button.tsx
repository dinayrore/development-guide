import React, { ReactNode } from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { ButtonText } from "./constants";
import styles from "./Button.styles";

interface ButtonProps {
  buttonText: ButtonText;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  children?: ReactNode;
}

// 🧩 Button
// 🔗 https://reactnative.dev/docs/button
// 🧩 Pressable
// 🔗 https://reactnative.dev/docs/pressable
// 🧩 Text
// 🔗 https://reactnative.dev/docs/text

const Button = ({
  buttonText,
  onPress,
  buttonTextStyle,
  buttonStyle,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <Pressable style={[styles.buttonStyle, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default Button;
