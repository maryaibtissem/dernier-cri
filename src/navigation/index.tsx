import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Item as TypeItem } from "../views/screen1";
import Home from "../views/screen1";
import Screen2 from "../views/screen2";

export type RootStackParamList = {
  Home: undefined;
  Details: { item: TypeItem };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Ma liste" }}
        />
        <Stack.Screen
          name="Details"
          component={Screen2}
          options={{ title: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
