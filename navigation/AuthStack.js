import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { InitScreen, LoginScreen, SignupScreen, PopUpScreen } from "../screens";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Init"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Init" component={InitScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="pop" component={PopUpScreen} />
    </Stack.Navigator>
  );
};
