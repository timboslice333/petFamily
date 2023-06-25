import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { InitScreen, LoginScreen, SignupScreen, ConfirmEmailScreen} from "../screens";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ConfirmEmail"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Init" component={InitScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name = 'ConfirmEmail' component={ConfirmEmailScreen} />
    </Stack.Navigator>
  );
};
