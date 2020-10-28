import React from "react";
import { StyleSheet } from "react-native";
import MealsNavigator from "./navigation/MealsNavigator";

export default function App() {
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});