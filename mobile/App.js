import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import BusinessScreen from "./src/screens/BusinessScreen";
import ReviewsScreen from "./src/screens/ReviewsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Business" component={BusinessScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}