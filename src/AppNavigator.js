import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import Splash from "./normal/Splash";
import Parent from "./normal/Parent";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
            <Stack.Screen name="Parent" component={Parent} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
