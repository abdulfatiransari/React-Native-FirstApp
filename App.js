import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import AppNavigator from "./src/AppNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <View
        style={{ paddingTop: 0, backgroundColor: "#10101080", height: "100%" }}
      >
        <AppNavigator />
      </View>
    </>
  );
}
