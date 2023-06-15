import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./Main";
import Screen2 from "../bottom/Screen2";
import Screen3 from "../bottom/Screen3";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Sub-Main"
        component={Screen2}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Lower"
        component={Screen3}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
