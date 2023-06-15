import React from "react";
import { Text, View } from "react-native";

const Screen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{ fontSize: 20 }}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        Open Side Bar
      </Text>
    </View>
  );
};

export default Screen1;
