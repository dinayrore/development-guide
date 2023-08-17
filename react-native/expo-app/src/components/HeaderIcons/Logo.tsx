import React from "react";
import { Image } from "react-native";

const Logo = () => {
  return <Image source={require("assets/logo.png")} testID="logo" />;
};

export default Logo;
