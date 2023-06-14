import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Parent");
    }, 2000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor:'#f10101'}}>
      <Image
        source={require("../../assets/favicon.png")}
        style={{ width: 100, height: 100 }}
      />
      <Text>Loading...</Text>
    </View>
  );
};

export default Splash;
