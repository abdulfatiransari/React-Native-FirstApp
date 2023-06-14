import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import AppNavigator from "./src/AppNavigator";
// import Details from "./(tabs)/details";
// import Home from "./(tabs)/home";
// import Profile from "./(tabs)/profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator> */}
          {/* <Stack.Screen
            name="home"
            // component={HomeScreen}
            // options={{ title: "Welcome" }}
            >
            {(props) => <Home { ...props} />}
            </Stack.Screen>
          <Stack.Screen name="details">{(props) => <Details { ...props} />}</Stack.Screen>
          <Stack.Screen name="profile">{(props) => <Profile { ...props} />}</Stack.Screen> */}
        {/* </Stack.Navigator>
      </NavigationContainer> */}
      <View style={{paddingTop:0,backgroundColor:'#10101080', height:'100%'}}>
        <AppNavigator />
      </View>
    </>
  );
}