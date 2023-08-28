import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { globalStyles } from "theme/global.styles";
import { styles } from "./home.styles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Dog Points Home Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
